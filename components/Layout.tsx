import React from 'react'
import Navbar from './Navbar';
// import Hamburger from "./Hamburger";

const Layout = ({ children }: {
    children: any;
}) => {
    return (
        <div className="w-screen h-screen bg-transparent">
            <div className="flex flex-col h-full w-full">
                <Navbar/>
                {/* <Hamburger /> */}
                {children}
            </div>
        </div>
    )
}

export default Layout