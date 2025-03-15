import React from "react";
import { Outlet, Link } from "react-router-dom";
import hamburgerIcon from "../assets/hamburger.png";
import hamburgerIconDown from "../assets/hamburgerDown.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navIcon = isOpen ? hamburgerIconDown : hamburgerIcon;

    const buttonClases =
        "text-black font-bold text-sm px-2 py-1 border-2 border-black hover:bg-gray-400 hover:text-gray-100 rounded-lg transition duration-300 ease-in-out";

    const button = (
        <>
            <Link to="/Project">
                <button className={buttonClases}>Project</button>
            </Link>
            <Link to="/Bio">
                <button className={buttonClases}>Bio</button>
            </Link>
            <Link to="/Experiance">
                <button className={buttonClases}>Experience</button>
            </Link>
        </>
    );

    return (
        <>
            <nav className="bg-white bg-opacity-30 text-black w-full fixed top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex flex-row w-full justify-between">
                        <Link to="/">
                            <div className="text-xl font-bold">Rahul Ramjeawon</div>
                        </Link>
                            <div className="hidden md:block">
                                <div className="flex ml-10 items-baseline space-x-2">
                                    {button}
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="fill-black">
                                <img
                                    src={navIcon}
                                    alt="Menu"
                                    className="w-10 transition duration-300 ease-in-out"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-4">
                        {button}
                    </div>
                )}
            </nav>

            <Outlet />
        </>
    );
};

export default NavBar;
