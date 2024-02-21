import { useState } from "react";
import shortenURL from "../../api/shortenAPI";

export const InputURLButton = ({userURL, setUserURL, setShortenURL}) => {
    const [dataURL, setDataURL] = useState("");

    const handleShortenURL = async () => {
        try {
            const responseData = await shortenURL.post('/shorten', {long_url: userURL});

            setDataURL(responseData.data);
            setShortenURL(responseData.data);
        } catch (requestError) {
            console.log(`Error: ${requestError}`);
        }

        setUserURL("");
    }

    return (
        <button 
            className="w-36 p-2 rounded-md border border-blue-700 bg-blue-700 text-white text-md transition ease-linear
            hover:border-blue-500 hover:bg-zinc-100 hover:text-blue-700 dark:hover:bg-slate-700 dark:hover:text-white dark:hover:border-white"
            onClick={handleShortenURL}>
                Shorten URL
        </button>
    );
};