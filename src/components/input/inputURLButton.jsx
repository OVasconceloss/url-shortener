import { useState } from "react";
import shortenURL from "../../api/shortenAPI";

export const InputURLButton = ({userURL, setUserURL, setShortenURL, setInputError, setErrorMessage}) => {
    const [dataURL, setDataURL] = useState("");

    const handleleValidateURL = (URL) => {
        const regexURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
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
            setErrorMessage('O campo de URL está vazio! Preencha-o com a URL que deseja encurtar!');

            setTimeout(() => {
                setInputError(false);
            }, 3000);
        } else if (!handleleValidateURL(userURL)) {
            setInputError(true);
            setErrorMessage("Essa URL possuí um formato inválido. Por favor, tente novamente!");

            setTimeout(() => {
                setInputError(false);
                setUserURL('');
            }, 3000);
        } else {
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