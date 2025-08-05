import './globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';
import AOSInit from '../components/AOSInit';

export const metadata = {
  title: 'Geremiaco',
  description: 'Geremiaco landing page'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const messages = useMessages();

  return (
    <html lang="en" className="font-montserrat">
      <body className="min-h-screen font-montserrat" style={{ backgroundColor: '#17293A' }}>
        <NextIntlClientProvider messages={messages}>
          <AOSInit />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}