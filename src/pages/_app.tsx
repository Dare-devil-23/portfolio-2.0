import type { AppProps } from "next/app";
import { Metadata } from 'next';
import Layout from "@/components/common/layout";
import { useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import "@/styles/404.css";

export const metadata: Metadata = {
  title: 'Sahith Portfolio',
  description: 'Made with love by Sahith',
  icons: {
    icon: '/favicon.png',
  },
};

const App: React.FC<AppProps> = (props: AppProps) => {

  const { Component, pageProps, router } = props;

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default App