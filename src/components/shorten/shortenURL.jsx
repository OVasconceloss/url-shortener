export const ShortenURLResult = () => {
    return (
        <div className="px-5 py-7 flex items-center justify-between bg-zinc-100 w-full rounded-md">
            <h3 className="text-base text-blue-600">https://exampleshortenlink</h3>
            <button className="p-2 text-md bg-blue-500 rounded-md text-white border border-white transition ease-linear
            hover:border-blue-500 hover:bg-zinc-100 hover:text-blue-500">Copy URL to Clipboard</button>
        </div>
    );
};