import React from 'react'

const Card = (props: any) => {
    const {date}=props
    return (
        <div className="w-1/2 h-1/8 flex flex-col text-black p-10">
            <div className = "flex-1/8 bg-[#183e43] text-white justify-center items-center text-center p-2"><h1>{date}</h1></div>
            <div className="flex-7/8 bg-[#DCDFD4] p-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga quos aliquid tenetur aperiam fugit voluptatem, magnam, numquam autem omnis earum! Qui labore ratione quaerat optio quibusdam aliquam similique libero.</p>
                
            </div>
        </div>
    )
}

export default Card