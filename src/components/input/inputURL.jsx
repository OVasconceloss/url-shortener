import { useState } from "react";
import { InputURLButton } from "./inputURLButton";

export const InputURL = () => {
    const [userURL, setUserURL] = useState("");

    return (
        <div className="flex items-center p-5 my-2 bg-blue-500 rounded-lg space-x-3 dark:bg-slate-700">
            <input 
                type="text" 
                name="url" id="url" 
                placeholder="Enter your URL here!"
                className="p-2 w-full rounded-md outline-none placeholder:text-zinc-400 border border-blue-500 transition ease-linear
                focus:border-blue-700 focus:placeholder:text-blue-400 
                dark:border-slate-600 dark:bg-slate-800 dark:focus:border-blue-500"
                value={userURL}
                onChange={(inputText) => setUserURL(inputText.target.value)}
            />
            <InputURLButton userURL={userURL} setUserURL={setUserURL} />  
        </div>
    );
};