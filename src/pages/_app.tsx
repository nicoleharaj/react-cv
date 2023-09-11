import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const nav = useRouter();

  return (
    <SessionProvider session={session}>
      <div className="flex h-screen max-w-7xl flex-col justify-between">
        <Navbar />
        <AnimatePresence mode="popLayout">
          <motion.div
            className="flex-grow text-off-black"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ ease: "easeOut" }}
            key={nav.asPath}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);