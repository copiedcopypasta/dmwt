// proxy.ts
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'de'];
const defaultLocale = ['en'];

export function proxy(request: NextRequest) {   // <-- type added here
  const { pathname } = request.nextUrl;

  // Skip internal and file asset requests
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If localized already, just continue
  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};