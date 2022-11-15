import React from 'react'
import Card from '../components/Card'

const event = () => {
  let eventDates=["13th Feb", "18th Feb", "24th Feb", "10th March"]
  return (
    <div className= "flex flex-col w-full h-full justify-evenly items-start p-10 ">
        <h1 className="text-3xl font-semibold flex px-20 py-10">Events</h1>
        <div className="flex flex-wrap w-1/8 h-1/8 p-10 ">
            {eventDates.map((item, index) => {
                return <Card key={index} date={item}/>
            })}
        </div>
    </div>
  )
}

export default event
