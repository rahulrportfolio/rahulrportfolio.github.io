import React from "react";
import { Outlet, Link } from "react-router-dom";
import hamburgerIcon from "../assets/hamburger.png";
import hamburgerIconDown from "../assets/hamburgerDown.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navIcon = isOpen ? hamburgerIconDown : hamburgerIcon;

    const buttonClasses =
        "text-black font-bold text-sm px-2 py-1 border-2 border-black hover:bg-gray-400 hover:text-gray-100 rounded-lg transition duration-300 ease-in-out";

    const NavButton = ({ to, children }) => (
        <Link to={to}>
            <button onClick={() => toggleNav()} className={buttonClasses}>{children}</button>
        </Link>
    );

    const toggleNav = () => {
        if (isOpen) {
            setIsOpen(!isOpen);
        }
    }

    const navItem = (
        <>
            <NavButton to="/Project">Project</NavButton>
            <NavButton to="/Bio">Bio</NavButton>
            <NavButton to="/Experience">Experience</NavButton>
        </>
    )

    return (
        <>
            <nav className="bg-white bg-opacity-30 text-black w-full fixed top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex flex-row w-full justify-between">
                            <Link to="/">
                                <div className="text-xl font-bold hover:text-gray-600 transition duration-300 ease-in-out">
                                    Rahul Ramjeawon
                                </div>
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex ml-10 items-baseline space-x-2">
                                    {navItem}
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="fill-black focus:outline-none"
                                aria-label="Toggle navigation"
                                aria-expanded={isOpen}
                            >
                                <img
                                    src={navIcon}
                                    alt="Menu"
                                    className="w-10 transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        `flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                        }`
                    }
                >
                    {navItem}
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default NavBar;
