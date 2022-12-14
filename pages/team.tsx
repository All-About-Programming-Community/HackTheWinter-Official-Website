import Head from 'next/head';
import React, { useEffect } from 'react';
import { useState } from 'react'

const Team = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(
            "https://opensheet.elk.sh/1iNnckfoi_uKYozysQJr5eXwene9WOUC5d3-JSDdE3YM/TeamData"
        );
        setUsers(await response.json());
    };
    useEffect(() => {
        // var customQuery = window.location.href.split("#")[1];
        // customQuery ? getUsers(customQuery) : getUsers();
        getUsers();
    }, []);
    return (
        <div className="">
            <Head>
                <title>About | Hack The Winter 2023</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-row justify-center flex-wrap items-center gap-x-40 gap-y-10 w-100 pt-14">
                {users.map((curElem, i) => {
                    return (
                        <div key={i} className="flex flex-col justify-evenly items-center bg-[#183E43] rounded-xl p-5 text-white">
                            <h1 className="text-2xl">{curElem['Name']}</h1>
                            <img className="h-hit w-fit m-3 rounded-full" src={curElem['Photo']} alt={curElem['Name'] + "'sImage"} />
                            <h1 className="text-xl">{curElem['Role']}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team