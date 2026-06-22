import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Digital AI Technologies | Enterprise AI & Software Solutions',
  description: 'Digital AI Technologies is a premier technology partner specializing in artificial intelligence, custom software development, and digital transformation. We empower businesses with cutting-edge innovations.',
  keywords: ['Digital AI Technologies', 'AI Development', 'Software Engineering', 'Enterprise Solutions', 'Digital Transformation', 'Machine Learning', 'Web Development'],
  openGraph: {
    title: 'Digital AI Technologies | Enterprise AI & Software Solutions',
    description: 'Digital AI Technologies is a premier technology partner specializing in artificial intelligence, custom software development, and digital transformation.',
    url: 'https://digitalaitech.com',
    siteName: 'Digital AI Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital AI Technologies | Enterprise AI & Software Solutions',
    description: 'Empowering businesses with cutting-edge AI and software solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-dark text-dark dark:text-white transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
