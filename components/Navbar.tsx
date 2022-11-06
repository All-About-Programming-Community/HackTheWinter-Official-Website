import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const menu = [{ label: "Home", route: "/" }, { label: "Timeline", route: "/timeline" }, { label: "Team", route: "/team" }, { label: "Tracks", route: "/tracks" }]
    return (
        <div className="w-full h-fit text-white flex flex-row justify-evenly items-center p-2 bg-blue-900">
            {menu.map((item, index) => {
                return (
                    <div key={index} className="text-xl font-bold">
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