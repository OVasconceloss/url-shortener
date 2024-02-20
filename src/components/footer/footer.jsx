import { Link } from "react-router-dom";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center bg-zinc-100 mt-44 pt-5
        dark:bg-slate-700">
            <div className="flex flex-col items-center justify-center">
                <h3 className="p-2 text-2xl text-center font-bold text-blue-500">React URL</h3>
                <p className="w-1/2 p-2 mb-5 text-md text-center dark:text-white">
                    The URL shortener developed in React is an intuitive tool designed to simplify
                    the management and sharing of long URLs. With a simple interface, this website
                    allows users to shorten lengthy links with just one click, making them more accessible
                    and easy to share on digital platforms, social networks, and instant messages.</p>
            </div>
            <div className="p-1 mt-3 w-full flex items-center justify-between bg-blue-500 rounded-t-md dark:bg-slate-600">
                <h4 className="text-white tracking-wide">copyright &copy; {currentYear} Victor Vasconcelos</h4>
                <div>
                    <Link className="p-2 ml-2 text-lg text-white transition ease-linear border-b-2 border-blue-500 
                    hover:text-white hover:border-white"to={'/'}>Home</Link> 
                    <Link className="p-2 ml-3 text-lg text-white transition ease-linear border-b-2 border-blue-500 
                    hover:text-white hover:border-white"to={'/about'}>About</Link>  
                    <a href="https://github.com/OVasconceloss/url-shortener" target="_blank">
                        <button className="w-24 p-1 ml-8 rounded-lg border-2 bg-blue-500 text-white text-lg transition ease-linear 
                        hover:bg-white hover:text-blue-500 hover:border-blue-500">
                            <i className="fa-brands fa-github"></i>
                        </button>
                    </a> 
                </div>
            </div>
        </footer>
    );
};