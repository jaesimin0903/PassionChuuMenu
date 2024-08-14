
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import "@/app/globals.css"
import { LanguageProvider } from '../context/LanguageCotext';
import { Language } from '../types';
import { Analytics } from "@vercel/analytics/react"
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: Language};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  //unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider initialLocale={locale}>
          {children}
          </LanguageProvider>
          <div id="global-modal"></div>
          <div id="howtoeat-modal"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}