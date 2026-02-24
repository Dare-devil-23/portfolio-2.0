import type { AppProps } from "next/app";
import Head from 'next/head';
import Layout from "@/components/common/layout";
import { useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import "@/styles/404.css";

const App: React.FC<AppProps> = (props: AppProps) => {

  const { Component, pageProps, router } = props;

  useEffect(() => {
    const lenis = new Lenis()
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Sahith Portfolio</title>
        <meta name="description" content="Made with love by Sahith" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default App