import "@/styles/globals.css";
import "@/styles/home.scss";
import "@/styles/header.scss";
import "@/styles/tarjeta.scss";
import "@/styles/slide.scss";
import "../components/splash/splash.screen.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}
