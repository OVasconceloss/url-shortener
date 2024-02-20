import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { InputURL } from "../components/input/inputURL";
import { ShortenURLResult } from "../components/shorten/shortenURL";

const Home = () => {
    return (
        <>
        <Header />
        <hr className="mt-5 border-zinc-200" />
        <main className="p-5 m-10 flex flex-col items-center justify-center">
            <section className="p-5 flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="py-2 text-4xl font-bold text-blue-500 tracking-wide uper">Free URL Shortener</h2>
                    <p className="pb-2 text-lg">Minimize Links, Maximize Convenience: Your Ultimate URL Shortening Solution</p>
                </div>
                <div>
                    <InputURL />
                </div>
            </section>
            <section className="w-1/2 flex items-center justify-center">
                <ShortenURLResult />
            </section>
        </main>
        <Footer /> 
        </>
    );
};

export default Home;