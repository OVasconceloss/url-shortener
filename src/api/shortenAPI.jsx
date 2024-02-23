import axios from "axios";

const apiURL = 'https://api-ssl.bitly.com/v4/';
const accessToken = import.meta.env.VITE_BITLY_TOKEN_ACCESS;
console.log(accessToken)

const shortenURL = axios.create({
    baseURL: apiURL,
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        "Content-Type": 'application/json'
    },
});

export default shortenURL;