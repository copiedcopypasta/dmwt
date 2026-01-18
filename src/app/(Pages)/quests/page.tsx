import { cookies } from 'next/headers';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getContent } from '@/lib/content';
import { compileMdx } from '@/lib/markdown';
import { cn } from '@/lib/utils';

/**
 * Type definition for a quiz/chapter button
 * @property id - Unique identifier for the quiz
 * @property title - Title of the chapter (loaded from MDX frontmatter)
 * @property href - URL the button should navigate to when clicked (CHANGE THIS TO MODIFY BUTTON ROUTING)
 * @property blurb - Description/preview text (loaded from MDX frontmatter)
 * @property slug - File name slug (e.g., 'chapter_1')
 */
type Quiz = {
  id: number;
  title: string;
  href: string;
  blurb: string;
  slug: string;
};

/**
 * Type definition for frontmatter data extracted from MDX chapter files
 */
type ChapterFrontmatter = {
  title: string;
  description: string;
  filename?: string;
};

/**
 * Fetches the user's quiz progress from the database
 * TODO: Replace with a real DB-backed progress lookup for the signed-in user
 * This function should query a database table that tracks which quizzes the user has completed
 * @returns {completedCount} - Number of quizzes the user has completed
 */
async function getUserQuizProgress(): Promise<{ completedCount: number }> {
  // Example implementation for now; wire this to your user/quiz progress table
  return { completedCount: 0 };
}

/**
 * Loads chapter metadata (title and description) from the MDX files
 * Supports both German (de) and English (en) locales
 * @param locale - Language locale ('de' or 'en')
 * @param chapterNumber - Chapter number (1-6)
 * @returns Chapter title and description from MDX frontmatter
 */
async function getChapterMetadata(
  locale: string,
  chapterNumber: number,
): Promise<{ title: string; description: string }> {
  try {
    // Reads the chapter_X.mdx file from content/{locale}/info/
    const { source } = getContent(locale, 'info', `chapter_${chapterNumber}`);
    // Extracts frontmatter (title, description) from the MDX file
    const { frontmatter } = await compileMdx<ChapterFrontmatter>({ source });
    return {
      title: frontmatter.title || `Chapter ${chapterNumber}`,
      description: frontmatter.description || '',
    };
  } catch {
    // Fallback values if the file cannot be read
    return {
      title: `Chapter ${chapterNumber}`,
      description: '',
    };
  }
}

/**
 * Detects the user's preferred language from browser cookies
 * Defaults to English ('en') if no locale preference is found
 * @returns User's preferred locale ('de' or 'en')
 */
async function getLocale(): Promise<'de' | 'en'> {
  const cookieStore = await cookies();
  // Check for locale preference in cookies or default to 'en'
  const locale = cookieStore.get('locale')?.value;
  return locale === 'de' ? 'de' : 'en';
}

/**
 * Loads UI text translations for the page based on locale
 * Translations are stored in src/i18n/{locale}/quests/page.json
 * @param locale - Language locale ('de' or 'en')
 * @returns Object containing translated strings
 */
async function getTranslations(locale: 'de' | 'en') {
  const translations = await import(`@/i18n/${locale}/quests/page.json`);
  return translations.default;
}

/**
 * Main page component for the Quests/Chapters interface
 * Displays 6 chapter buttons in a vertical alternating layout with sequential unlock logic
 */
export default async function Page() {
  // Get user's language preference
  const locale = await getLocale();
  // Load translated UI text
  const t = await getTranslations(locale);

  // Load chapter metadata (title and description) from all 6 chapter files
  const chaptersData = await Promise.all(
    [1, 2, 3, 4, 5, 6].map((num) => getChapterMetadata(locale, num)),
  );

  /**
   * Build the quizzes array with routing information
   * ROUTING CHANGE: To change button destinations, modify the 'href' property here
   * Currently routes to: /{locale}/info/chapter_{number}
   * Examples of alternatives:
   * - External URL: href: 'https://example.com/quiz' + index
   * - Query params: href: `/quizzes?chapter=${index + 1}`
   * - Different page: href: `/learn/${chapter.slug}`
   */
  const quizzes: Quiz[] = chaptersData.map((chapter, index) => ({
    id: index + 1,
    title: chapter.title,
    // *** CHANGE THIS LINE TO MODIFY BUTTON ROUTING ***
    href: `/${locale}/info/chapter_${index + 1}`,
    blurb: chapter.description,
    slug: `chapter_${index + 1}`,
  }));

  // Fetch user's completion progress
  const { completedCount } = await getUserQuizProgress();
  // Calculate how many chapters are unlocked (completed + 1 for the next available)
  const unlockedCount = Math.min(completedCount + 1, quizzes.length);
  // Get the most recently unlocked chapter for the "Continue" button
  const lastUnlocked = quizzes[Math.max(unlockedCount - 1, 0)];

  return (
    <div className='flex flex-col items-center gap-10 px-6 py-12'>
      {/* Page header with title and description */}
      <div className='flex max-w-3xl flex-col items-center gap-3 text-center'>
        <h1 className='text-4xl font-bold tracking-tight'>{t.title}</h1>
        <p className='text-muted-foreground'>{t.description}</p>
      </div>

      {/* Main content container with timeline layout */}
      <div className='w-full max-w-4xl'>
        <div className='relative flex flex-col gap-10'>
          {/* Vertical center line connecting all buttons */}
          <div className='from-primary/30 via-muted-foreground/30 to-primary/30 absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b' />

          {/* Map through all 6 chapters and render buttons */}
          {quizzes.map((quiz, index) => {
            // Determine unlock state: chapters unlock sequentially
            const isUnlocked = index < unlockedCount;
            const isCompleted = index < completedCount;
            // Highlight the next available chapter
            const isNext = index === unlockedCount - 1 && !isCompleted;
            // Alternate button positions (left/right) for visual interest
            const alignRight = index % 2 === 1;

            return (
              <div
                key={quiz.id}
                className={cn(
                  'flex w-full items-center gap-6',
                  alignRight ? 'justify-end pr-10' : 'justify-start pl-10',
                )}
              >
                {/* Connector line from left button to center timeline */}
                {!alignRight && (
                  <div className='relative max-w-[50%] flex-1 text-right'>
                    <div className='border-muted-foreground/40 absolute top-1/2 right-[-0.6rem] h-px w-10 -translate-y-1/2 border-t border-dashed' />
                  </div>
                )}

                {/* Chapter button */}
                <div className='relative z-10'>
                  <Button
                    asChild
                    // Style changes based on unlock state
                    variant={isUnlocked ? 'default' : 'outline'}
                    size='lg'
                    disabled={!isUnlocked}
                    className={cn(
                      'h-auto w-[340px] flex-col items-start gap-0 px-5 py-4 text-left shadow-sm transition-transform',
                      isUnlocked && 'hover:-translate-y-0.5 hover:shadow-md',
                      isNext && 'ring-primary/60 ring-2 ring-offset-2',
                    )}
                  >
                    {/* Link with routing - CHANGE href ABOVE to modify destinations */}
                    <Link
                      href={quiz.href}
                      prefetch={false}
                      className='flex w-full flex-col gap-0'
                    >
                      {/* Chapter title (wraps to multiple lines if too long) */}
                      <span className='text-base leading-tight font-semibold break-words whitespace-normal'>
                        {quiz.title}
                      </span>
                      {/* Chapter description - only visible when unlocked */}
                      {isUnlocked && (
                        <span className='text-muted-foreground mt-2 text-xs leading-relaxed break-words whitespace-normal'>
                          {quiz.blurb}
                        </span>
                      )}
                      {/* Status badge showing completion state */}
                      <span className='mt-3 inline-flex items-center gap-2 text-xs font-medium'>
                        {isCompleted && t.status.completed}
                        {!isCompleted && isUnlocked && t.status.ready}
                        {!isUnlocked && t.status.locked}
                      </span>
                    </Link>
                  </Button>
                </div>

                {/* Connector line from right button to center timeline */}
                {alignRight && (
                  <div className='relative max-w-[50%] flex-1 text-left'>
                    <div className='border-muted-foreground/40 absolute top-1/2 left-[-0.6rem] h-px w-10 -translate-y-1/2 border-t border-dashed' />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* "Continue to latest" button - takes user to the most recently unlocked chapter */}
      <div className='w-full max-w-3xl pt-2'>
        <Button
          asChild
          size='lg'
          className='h-14 w-full text-base font-semibold shadow-md'
        >
          {/* Also uses the href routing configured above */}
          <Link href={lastUnlocked.href} prefetch={false}>
            {t.continue}: {lastUnlocked.title}
          </Link>
        </Button>
      </div>
    </div>
  );
}
