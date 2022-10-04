import '../styles/globals.css';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <main className="min-h-screen bg-gray-100 px-10 border-8 border-amber-500/50">
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
