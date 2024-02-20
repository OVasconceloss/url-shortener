export const ShortenURLResult = () => {
    return (
        <div className="px-5 py-7 flex items-center justify-between bg-zinc-100 w-full rounded-md
        dark:bg-slate-600">
            <h3 className="text-lg text-blue-600 dark:text-white">https://exampleshortenlink</h3>
            <button className="p-2 text-md bg-blue-500 rounded-md text-white border border-white transition ease-linear
            hover:border-blue-500 hover:bg-zinc-100 hover:text-blue-500
            dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:border-white dark:hover:text-white">Copy URL to Clipboard</button>
        </div>
    );
};