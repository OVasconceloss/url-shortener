import { useState } from "react";

export const ShortenURLResult = ({urlShortened}) => {
    const [copyURL, setCopyURL] = useState(false);

    const handleCopyURL = (urlCopy) => {
        navigator.clipboard.writeText(urlCopy);
        setCopyURL(true);

        setTimeout(() => {
            setCopyURL(false);
        }, 2000);
    }

    return (
        <>
        {
            urlShortened 
            ?
            <div className="px-5 py-7 flex items-center justify-between bg-zinc-100 w-full rounded-md
            dark:bg-slate-600">
                <a href={`${urlShortened.link}`}>
                    <h3 className="text-lg text-blue-600 transition ease-linear hover:text-gray-500 dark:hover:text-blue-500 dark:text-white">{urlShortened.link}</h3>
                </a>
                <button
                    data-success={copyURL} 
                    className="p-2 text-md w-48 bg-blue-500 rounded-md text-white border border-white transition ease-linear
                    hover:border-blue-500 hover:bg-zinc-100 hover:text-blue-500
                    dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:border-white dark:hover:text-white
                    data-[success=true]:bg-emerald-500 data-[success=true]:hover:bg-emerald-500 
                    data-[success=true]:dark:hover:bg-emerald-500 data-[success=true]:hover:border-emerald-500 data-[success=true]:dark:hover:border-emerald-500"
                    onClick={() => handleCopyURL(urlShortened.link)}>
                        {copyURL ? <i className="fa-regular fa-circle-check"></i> : 'Copy URL to Clipboard'}
                    </button>
            </div>
            :
            <div></div> 
        }
        </>
    );
};