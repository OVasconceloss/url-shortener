export const InputURL = () => {
    return (
        <div className="flex items-center p-5 my-2 bg-blue-500 rounded-lg space-x-3">
            <input 
                type="text" 
                name="url" id="url" 
                placeholder="Enter your URL here!"
                className="p-2 w-full rounded-md outline-none placeholder:text-zinc-400 border border-blue-500 transition ease-linear
                focus:border-blue-700 focus:placeholder:text-blue-400"
            />
            <button className="w-36 p-2 rounded-md border border-blue-700 bg-blue-700 text-white text-md transition ease-linear
            hover:border-blue-500 hover:bg-zinc-100 hover:text-blue-700">Shorten URL</button>
        </div>
    );
};