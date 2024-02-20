import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="flex items-center justify-between p-5">
            <Link to={'/'}>
                <h1 className="text-3xl font-bold tracking-wide text-blue-500">React URL</h1>
            </Link>
          <nav>
               <Link className="p-2 ml-2 text-lg transition ease-linear border-b-2 border-white 
               hover:text-blue-500 hover:border-blue-500"to={'/'}>Home</Link> 
               <Link className="p-2 ml-3 text-lg transition ease-linear border-b-2 border-white 
               hover:text-blue-500 hover:border-blue-500"to={'/about'}>About</Link>  
               <a href="https://github.com/OVasconceloss/url-shortener" target="_blank">
                    <button className="w-20 p-1 ml-8 rounded-lg border-2 bg-blue-500 text-white text-lg transition ease-linear 
                    hover:bg-white hover:text-blue-500 hover:border-blue-500">
                        <i className="fa-brands fa-github"></i>
                    </button>
                </a>
                <button className="w-20 rounded-lg p-1 ml-2 border-2 bg-transparent text-blue-500 text-lg transition ease-linear 
                hover:bg-blue-500 hover:text-white hover:border-blue-500">
                    <i class="fa-solid fa-moon"></i>
                </button>
            </nav>
        </header>
    );
};