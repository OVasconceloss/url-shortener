import { useEffect, useState } from "react";
import { InputURLButton } from "./inputURLButton";

export const InputURL = ({getShortenedURL, getErrorMessage}) => {
    const [userURL, setUserURL] = useState("");
    const [shortenURL, setShortenURL] = useState("");
    const [inputError, setInputError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputError = inputError => setInputError(inputError);
    const handleShortenURL = urlShorten => setShortenURL(urlShorten);

    const handleErrorMessage = errorMessage => {
        setErrorMessage(errorMessage);
        const sendErrorMessageToParent = () => getErrorMessage(errorMessage);

        if (errorMessage) sendErrorMessageToParent();
    }

    useEffect(() => {
        getShortenedURL(shortenURL);
    }, [shortenURL, getShortenedURL]);

    return (
        <div className="flex items-center p-5 my-2 bg-blue-500 rounded-lg space-x-3 dark:bg-slate-700">
            <input 
                type="text" 
                name="url" id="url" 
                data-fail={inputError}
                placeholder="Enter your URL here!"
                className="p-2 w-full rounded-md outline-none placeholder:text-zinc-400 border border-blue-500 transition ease-linear
                focus:border-blue-700 focus:placeholder:text-blue-400 
                dark:border-slate-600 dark:bg-slate-800 dark:focus:border-blue-500 dark:text-white
                data-[fail=true]:border-red-500 data-[fail=true]:dark:border-red-500"
                value={userURL}
                onChange={(inputText) => setUserURL(inputText.target.value)}
            />
            <InputURLButton 
                userURL={userURL} 
                setUserURL={setUserURL} 
                setInputError={handleInputError} 
                setShortenURL={handleShortenURL} 
                setErrorMessage={handleErrorMessage}
            />  
        </div>
    );
};