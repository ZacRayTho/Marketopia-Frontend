import { GlobalProvider } from "../context/GlobalState";

function Home() {
    return (
        <GlobalProvider>
            <div>
                I'm in App component
            </div>
        </GlobalProvider>
    );
}

export default Home;
