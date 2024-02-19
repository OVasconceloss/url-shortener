import { Header } from "../components/header/header";

const Home = () => {
    return (
        <>
        <Header />
        <hr className="mt-5 border-zinc-200" />
        <main className="p-5 m-10 flex items-center justify-center">
            <section className="p-5 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="py-2 text-4xl text-blue-500 tracking-wide uper">Free URL Shortener</h2>
                    <p className="pb-2 text-lg">Minimize Links, Maximize Convenience: Your Ultimate URL Shortening Solution</p>
                </div>
                <div>

                </div>
            </section>
            <section>

            </section>
        </main>
        </>
    );
};

export default Home;