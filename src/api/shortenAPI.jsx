import axios from "axios";

const apiURL = 'https://api-ssl.bitly.com/v4/shorten';
const accessToken = import.meta.env.VITE_BITLY_TOKEN_ACCESS;

const shortenURL = axios.post({
    baseURL: apiURL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    },
});

export default shortenURL;