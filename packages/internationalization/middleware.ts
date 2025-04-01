import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { createI18nMiddleware } from 'next-international/middleware';
import type { NextRequest } from 'next/server';
import languine from './languine.json';

const locales = [languine.locale.source, ...languine.locale.targets];

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: 'en',
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest: (request: NextRequest) => {
    try {
      const headers = Object.fromEntries(request.headers.entries());
      const negotiator = new Negotiator({ headers });

      // Handle potential errors with language negotiation
      let acceptedLanguages: string[] = [];
      try {
        acceptedLanguages = negotiator.languages();
      } catch (error) {
        console.error('Error determining accepted languages:', error);
        return 'en'; // Default to English on error
      }

      // Filter out any invalid locale values before matching
      const validAcceptedLanguages = acceptedLanguages.filter((lang) => {
        try {
          // This will throw for invalid locale strings
          Intl.getCanonicalLocales(lang);
          return true;
        } catch {
          return false;
        }
      });

      if (validAcceptedLanguages.length === 0) {
        return 'en'; // Default to English if no valid languages
      }

      // Try to match the locale, with fallback to default
      try {
        const matchedLocale = matchLocale(
          validAcceptedLanguages,
          locales,
          'en'
        );
        return matchedLocale;
      } catch (error) {
        console.error('Error matching locale:', error);
        return 'en'; // Default to English on error
      }
    } catch (error) {
      console.error('Unexpected error in locale resolution:', error);
      return 'en'; // Default to English on any error
    }
  },
});

export function internationalizationMiddleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

//https://nextjs.org/docs/app/building-your-application/routing/internationalization
//https://github.com/vercel/next.js/tree/canary/examples/i18n-routing
//https://github.com/QuiiBz/next-international
//https://next-international.vercel.app/docs/app-middleware-configuration
