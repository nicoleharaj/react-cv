import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r bg-gray-100 px-10 border-8 border-yellow-500/30">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}