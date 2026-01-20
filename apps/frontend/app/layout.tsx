import { Geist_Mono, Manrope } from 'next/font/google';

import '@workspace/ui/globals.css';
// import { ThemeProvider } from '@workspace/ui/providers/theme-provider';
import { Providers } from '@/components/providers';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import { Toaster } from '@workspace/ui/components/sonner';

const fontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
        {/* <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider> */}
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors closeButton position='top-center' />
        </Providers>
      </body>
    </html>
  );
}
