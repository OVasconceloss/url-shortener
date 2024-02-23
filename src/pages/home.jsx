import { useState, useEffect } from "react";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { InputURL } from "../components/input/inputURL";
import { ShortenURLResult } from "../components/shorten/shortenURL";
import { LoadingAnimation } from "../components/loading/loadingAnimation";

const Home = () => {
    const [urlShortened, setURLShortened] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [urlIsLoading, setUrlIsLoading] = useState(false);
    const [errorNotification, setErrorNotification] = useState(false);

    const getShortenedURl = shortenedURL => {
        setURLShortened(shortenedURL);
        setTimeout(() => {
            setUrlIsLoading(false);
        }, 2000);
    }

    const getErrorMessage = errorMessage => {
        setErrorMessage(errorMessage);
        setUrlIsLoading(false);
    }

    useEffect(() => {
        if (errorMessage) {
            setErrorNotification(true);
            setTimeout(() => {
                setErrorNotification(false);
                setErrorMessage('');
            }, 3000);
        }
    }, [errorMessage]);

    return (
        <>
        <Header />
        <hr className="mt-5 border-zinc-200 dark:border-slate-700" />
        <main className="px-5 py-32 h-full flex flex-col items-center justify-center dark:bg-slate-800">
            <section className="p-5 mt-9 flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="py-2 text-4xl font-bold text-blue-500 tracking-wide uper">Free URL Shortener</h2>
                    <p className="pb-2 text-lg dark:text-white">Minimize Links, Maximize Convenience: Your Ultimate URL Shortening Solution</p>
                </div>
                <div>
                    <InputURL getShortenedURL={getShortenedURl} getErrorMessage={getErrorMessage} setUrlIsLoading={setUrlIsLoading}/>
                </div>
            </section>
            <section className="w-1/2 flex items-center justify-center">
                {urlIsLoading
                ? (
                    <LoadingAnimation />
                ) : (
                    <ShortenURLResult urlShortened={urlShortened}/>
                )}
            </section>
        </main>
        <Footer />
        {errorNotification && (
            <div className="w-[25rem] fixed bottom-5 right-5 bg-red-500 text-white py-2 px-4 rounded shadow">
                {errorMessage}
            </div>
        )} 
        </>
    );
};

export default Home;