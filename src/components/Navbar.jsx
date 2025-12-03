import { navbarLinks } from "../constants";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between h-13 mx-10">
            <img src="/logo.svg" className="h-7" />
            <ul className="text-white text-2xs flex gap-3">
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
