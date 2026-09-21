import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Qorvance | Enterprise AI & Software Solutions',
  icons: {
    icon: '/images/qorvance-logo.jpg',
  },
  description: 'Qorvance is a premier technology partner specializing in artificial intelligence, custom software development, and digital transformation. We empower businesses with cutting-edge innovations.',
  keywords: ['Qorvance', 'AI Development', 'Software Engineering', 'Enterprise Solutions', 'Digital Transformation', 'Machine Learning', 'Web Development'],
  openGraph: {
    title: 'Qorvance | Enterprise AI & Software Solutions',
    description: 'Qorvance is a premier technology partner specializing in artificial intelligence, custom software development, and digital transformation.',
    siteName: 'Qorvance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qorvance | Enterprise AI & Software Solutions',
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
          defaultTheme="dark"
          enableSystem={false}
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
