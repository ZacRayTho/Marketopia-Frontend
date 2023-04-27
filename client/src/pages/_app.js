// import Header from "../components/Header"
import { GlobalProvider } from "../context/GlobalState";
import "../styles/global.css";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Toaster />
      <div className="h-full flex flex-col w-screen">
        <Header />
        <div className="flex flex-1 w-screen">
          <Component {...pageProps} />
        </div>
      </div>
    </GlobalProvider>
  );
}
