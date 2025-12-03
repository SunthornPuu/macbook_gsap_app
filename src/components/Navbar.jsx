import { navbarLinks } from "../constants";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between h-13 mx-10 absolute inset-0">
            <img src="/logo.svg" className="h-7" />
            <ul className="hidden md:flex text-white text-2xs gap-3">
                {navbarLinks.map((item, index) => (
                    <li key={index}>
                        <button>{item.label}</button>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center gap-3">
                <button>
                    <img src="/search.svg" alt="search"></img>
                </button>
                <button>
                    <img src="/cart.svg" alt="cart"></img>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
