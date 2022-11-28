/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const menu = [{ label: "About", route: "/" }, { label: "Timeline", route: "/timeline" }, { label: "Team", route: "/team" }, { label: "Tracks", route: "/tracks" }]
    return (
        <div className="w-full h-fit text-black flex flex-row justify-start gap-12 items-center bg-transparent sticky top-0 z-[100] bg-gradient-to-r from-white via-transparent">
            <img src="./logo.svg" height={80} width={100} alt="AAP-logo" className="pl-5 py-1" />
            {menu.map((item, index) => {
                return (
                    <div key={index} className="text-xl">
                        <Link href={item.route}>
                            {item.label}
                        </Link>
                    </div>
                )
            })}
            <div className="text-xl">
                More &gt;
            </div>
        </div>
    )
}

export default Navbar