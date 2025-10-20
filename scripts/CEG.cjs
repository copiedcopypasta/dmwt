// Component Export Generator
// - Reads configuration from project root `ceg.config.cjs`
// - Scans the components directory recursively for files with allowed extensions
// - Ignores configured filenames
// - Generates `index.ts` using `index.template.ts` if present, otherwise uses a fallback template

const fs = require('fs');
const path = require('path');

// Load config (CommonJS expected)
const projectRoot = path.join(__dirname, '..');
let config;
try {
  config = require(path.join(projectRoot, 'ceg.config.cjs'));
} catch (err) {
  console.error(
    'Failed to load ceg.config.cjs from project root:',
    err.message,
  );
  process.exitCode = 2;
  throw err;
}

const paths = config.paths || {};
const rules = config.rules || {};

// Prefer project layout with `src/app/components`, fall back to `src/components`.
const defaultCandidates = ['src/app/components', 'src/components'];
const detectedDefault =
  defaultCandidates.find((p) => fs.existsSync(path.join(projectRoot, p))) ||
  defaultCandidates[0];

const COMPONENTS_DIR = path.join(
  projectRoot,
  paths.components || detectedDefault,
);

// If indexTemplate/indexOutput aren't configured, place them next to the components dir
const TEMPLATE_PATH = paths.indexTemplate
  ? path.join(projectRoot, paths.indexTemplate)
  : path.join(COMPONENTS_DIR, 'index.template.ts');
const OUTPUT_FILE = paths.indexOutput
  ? path.join(projectRoot, paths.indexOutput)
  : path.join(COMPONENTS_DIR, 'index.ts');
const ALLOWED_EXTENSIONS = (rules.allowedExtensions || ['.tsx']).map(String);
const IGNORE_FILES = new Set(
  (rules.ignoreFiles || ['base.tsx', 'index.ts', 'index.template.ts']).map(
    String,
  ),
);

// Helpers
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function isAllowed(file) {
  return ALLOWED_EXTENSIONS.includes(path.extname(file));
}

function collectComponentFiles(dir, rootDir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...collectComponentFiles(full, rootDir));
    } else if (e.isFile()) {
      if (IGNORE_FILES.has(e.name)) continue;
      if (!isAllowed(e.name)) continue;
      // store relative path from components root, using posix style for imports
      const rel = path.relative(rootDir, full).split(path.sep).join('/');
      results.push({ name: e.name, full, rel });
    }
  }
  return results;
}

function deriveExportPath(relPath) {
  // Strip filename, keep folder path relative to components root
  const parsed = path.posix.parse(relPath);
  const dir = parsed.dir; // posix
  // If the component file is directly inside a folder named like the component, prefer folder import
  // Otherwise import the file directly without extension
  const importPath = dir ? `./${dir}` : `./${parsed.name}`;
  return importPath;
}

// Execution
ensureDir(path.dirname(OUTPUT_FILE));

const files = collectComponentFiles(COMPONENTS_DIR, COMPONENTS_DIR);

// Group exports by folder (relative to components root)
// Key: folder (posix style), value: array of file entries ({name, full, rel})
const groups = new Map();
for (const f of files) {
  const parsed = path.posix.parse(f.rel);
  const dir = parsed.dir || '.';
  if (!groups.has(dir)) groups.set(dir, []);
  groups.get(dir).push(f);
}

// Helper to convert filenames to PascalCase for exported identifiers
function toPascalCase(name) {
  return name
    .replace(/\.[^/.]+$/, '') // strip extension if present
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// Build grouped export lines with comment per folder, explicit default-as exports per file
const exportLines = [];
// Sort groups for stable output
const sortedGroups = Array.from(groups.keys()).sort();
for (const dir of sortedGroups) {
  const filesInGroup = groups.get(dir);
  // Derive a human-friendly label: capitalize segments, map 'ui' -> 'UI'
  const labelParts =
    dir === '.'
      ? ['root']
      : dir.split('/').map((p) => {
          if (p.toLowerCase() === 'ui') return 'UI';
          return p.charAt(0).toUpperCase() + p.slice(1);
        });
  const folderLabel = labelParts.join('-') + ' Components';
  exportLines.push(`/* ${folderLabel} */`);

  // Sort files by their relative path for stable ordering
  filesInGroup.sort((a, b) => a.rel.localeCompare(b.rel));
  for (const f of filesInGroup) {
    const parsed = path.posix.parse(f.rel);
    const baseName = parsed.name; // filename without extension
    const exportName = toPascalCase(baseName);
    // Build import path without extension
    const importPath =
      parsed.dir && parsed.dir !== '.'
        ? `./${parsed.dir}/${baseName}`
        : `./${baseName}`;
    exportLines.push(
      `export { default as ${exportName} } from '${importPath}';`,
    );
  }
  exportLines.push('');
}

// Build final content: prefer template if available
let finalContent = '';
if (fs.existsSync(TEMPLATE_PATH)) {
  try {
    const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
    // simple placeholder replacement: {{exports}} -> lines
    if (template.includes('{{exports}}')) {
      finalContent = template.replace('{{exports}}', exportLines.join('\n'));
    } else {
      // append the exports at the end of the template
      finalContent = template + '\n\n' + exportLines.join('\n');
    }
  } catch (err) {
    console.warn(
      'Failed to read template, falling back to default template:',
      err.message,
    );
  }
}

if (!finalContent) {
  finalContent = [
    '// Generated by scripts/CEG.cjs — do not edit directly',
    ...exportLines,
    '',
  ].join('\n');
}

fs.writeFileSync(OUTPUT_FILE, finalContent, 'utf8');
// Count actual export statements for accurate logging
const actualExportCount = exportLines.filter((l) =>
  l.trim().startsWith('export'),
).length;
console.log(`Wrote ${OUTPUT_FILE} (${actualExportCount} exports)`);
