/**
 * Component index generator configuration
 * - kept as CommonJS to be node-compatible when required by scripts
 * - grouped and documented for clarity
 */

const paths = {
  // Directory where components live (relative to project root)
  components: 'src/app/components',

  // Template used to generate the index file (defaults to components folder)
  indexTemplate: 'src/app/components/index.template.ts',

  // Output path for the generated index file (defaults to components folder)
  indexOutput: 'src/app/components/index.ts',
};

const rules = {
  // File extensions to include when scanning for components
  allowedExtensions: ['.tsx'],

  // Filenames to ignore when scanning the components directory
  ignoreFiles: ['base.tsx', 'index.ts', 'index.template.ts'],
};

module.exports = {
  // Paths used by the generator
  paths,

  // Scanning / filtering rules
  rules,

  // Backwards-compatible top-level keys (optional convenience)
  components_directory: paths.components,
  index_template_path: paths.indexTemplate,
  output_file_path: paths.indexOutput,
  allowed_files_extensions: rules.allowedExtensions,
  ignore_files: rules.ignoreFiles,
};
