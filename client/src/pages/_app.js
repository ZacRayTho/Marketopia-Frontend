// import Header from "../components/Header"
import { GlobalProvider } from "../context/GlobalState"
import "../styles/global.css"
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
const Header = dynamic(() => import("../components/Header"), { ssr: false });


export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}