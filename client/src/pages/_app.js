// import Header from "../components/Header"
import Head from "next/head";
import { GlobalProvider } from "../context/GlobalState";
import "../styles/global.css";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <title>Marketopia</title>
        <link rel="icon" href="./img/mtlogo.png" />
      </Head>
      <Toaster />

      <Header />

      <Component {...pageProps} />
    </GlobalProvider>
  );
}
