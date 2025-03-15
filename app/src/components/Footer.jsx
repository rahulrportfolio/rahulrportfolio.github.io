import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-white bg-opacity-30 text-black text-center p-2 fixed bottom-0 w-full">
            <p className="text-sm">© {year} Rahul Ramjeawon. All rights reserved.</p>
        </footer>
    );
}

export default Footer;