/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const menu = [{ label: "About", route: "/" }, { label: "Timeline", route: "/timeline" }, { label: "Team", route: "/team" }, { label: "Tracks", route: "/tracks" }]
    const [active, setActive] = useState(false);
    return (
        <div className="w-full h-fit text-black flex sm:flex-row xs:flex-col xs:justify-around sm:justify-start gap-12 sm:items-center bg-transparent sticky top-0 z-[100] bg-gradient-to-r from-white via-transparent">
            <img src="./logo.svg" height={80} width={100} alt="AAP-logo" className="pl-5 py-1 z-20" />
            <div className={active ? "active-nav absolute pt-28 pl-10  h-screen flex gap-12 xs:flex-col items-center" : "nav flex sm:flex-row sm:gap-12 xs:flex-col xs:items-center"}>
                {menu.map((item, index) => {
                    return (
                        <div key={index} className="text-xl nav-item box-border p-3 flex items-center xs:font-semibold">

                            <Link href={item.route} className="nav-link">
                                {item.label}
                            </Link>
                        </div>
                    )
                })}
                {/* <div className="text-xl nav-item xs:font-semibold">
                    More
                    &gt;
                </div> */}
            </div>

            <div className={active ? 'ham-open right-0 px-5 top-8 absolute' : 'ham-burger absolute right-0 px-5 top-8 sm:hidden '} onClick={() => setActive(!active)}>
                <span className="lines line1"></span>
                <span className="lines line2"></span>
                <span className="lines line3"></span>
            </div>
        </div>
    )
}

export default Navbar

