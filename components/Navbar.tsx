/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const menu = [{ label: "Home", route: "/" }, { label: "Timeline", route: "/timeline" }, { label: "Team", route: "/team" }, { label: "Tracks", route: "/tracks" }]
    return (
        <div className="w-full h-fit text-black flex flex-row justify-start gap-10 items-center p-5 bg-white">
            <img src="./AAP-logo.png" height={30} width={30} alt="AAP-logo"></img>
            {menu.map((item, index) => {
                return (
                    <div key={index} className="text-xl font-semibold">
                        <Link href={item.route}>
                            {item.label}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar