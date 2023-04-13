import '../styles/globals.css';
import { AppProps } from 'next/app';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="transition-colors flex flex-col justify-between items-center min-h-screen bg-gray-100 pt-4 px-4  overflow-hidden sm:px-10 sm:pt-10  dark:bg-gray-900">
        <AnimatePresence mode="wait">
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
