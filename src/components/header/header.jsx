import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="p-5 flex items-center justify-between">
            <h1>URL Shortener</h1>
            <nav>
               <Link to={'/'}>Home</Link> 
               <Link to={'/about'}>About</Link>  
               <a href="https://github.com/OVasconceloss/url-shortener" target="_blank">
                    <button>
                        <i className="fa-brands fa-github"></i>
                    </button>
                </a> 
            </nav>
        </header>
    );
};