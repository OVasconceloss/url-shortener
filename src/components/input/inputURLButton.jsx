import { useState } from "react";
import shortenURL from "../../api/shortenAPI";

export const InputURLButton = ({userURL, setUserURL, setShortenURL, setInputError, setErrorMessage, setUrlIsLoading}) => {
    const [dataURL, setDataURL] = useState("");

    const handleleValidateURL = (URL) => {
        const regexURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return regexURL.test(URL);
    }

    const handleShortenURL = async () => {
        try {
            const responseData = await shortenURL.post('/shorten', {long_url: userURL});

            setDataURL(responseData.data);
            setShortenURL(responseData.data);
        } catch (requestError) {
            console.log(requestError);
        }

        setUserURL("");
    }

    const handleVerifyURL = () => {
        if (userURL == '') {
            setInputError(true);
            setErrorMessage('The URL field is empty! Fill it in with the URL you want to shorten!');

            setTimeout(() => {
                setInputError(false);
            }, 3000);
        } else if (!handleleValidateURL(userURL)) {
            setInputError(true);
            setErrorMessage("This URL has an invalid format. Please try again!");

            setTimeout(() => {
                setInputError(false);
                setUserURL('');
            }, 3000);
        } else {
            setUrlIsLoading(true);
            handleShortenURL();
        }
    }

    return (
        <button 
            className="w-36 p-2 rounded-md border border-blue-700 bg-blue-700 text-white text-md transition ease-linear
            hover:border-blue-500 hover:bg-zinc-100 hover:text-blue-700 dark:hover:bg-slate-700 dark:hover:text-white dark:hover:border-white"
            onClick={handleVerifyURL}>
                Shorten URL
        </button>
    );
};