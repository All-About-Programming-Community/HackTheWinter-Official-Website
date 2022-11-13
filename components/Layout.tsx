import React from 'react'
import Navbar from './Navbar';
import SocialFollow from './Socials';
// import Hamburger from "./Hamburger";

const Layout = ({ children }: {
    children: any;
}) => {
    return (
        <div className="w-screen h-screen bg-transparent overscroll-none">
            <div className="flex flex-col h-full w-full z-0">
                <Navbar/>
                <SocialFollow />
                {/* <Hamburger /> */}
                {children}
            </div>
        </div>
    )
}

export default Layout