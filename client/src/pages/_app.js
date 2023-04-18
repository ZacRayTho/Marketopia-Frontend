import Header from "../components/Header"
import { GlobalProvider } from "../context/GlobalState"
import "../styles/global.css"
import dynamic from "next/dynamic";

// const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider >
      <Header />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}