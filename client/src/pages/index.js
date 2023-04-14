import Browse from "../components/Browse";
import Filters from "../components/Filters";
import Header from "../components/Header";
import { GlobalProvider } from "../context/GlobalState";

function Home() {
    return (
        <GlobalProvider>
            <div className="h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex">
                    <div className="flex w-[19%]">
                        <Filters />
                    </div>
                    <div className="flex-1 bg-red-200">
                        <Browse />
                    </div>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default Home;
