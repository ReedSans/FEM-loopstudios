import React from 'react'

const CreationsCard = ({imgUrl, altText, cardText}) => {
  return (
    <div className="relative group w-full h-full lg:basis-1/5 lg:w-1/5 text-white before:absolute before:content-[''] before:inset-0 before:bg-[rgba(0,0,0,0.2)]">
      <img
        src={imgUrl}
        alt={altText}
        className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top "
      />
      <span className="text-inherit absolute bottom-5 left-8 group-hover:text-black text-3xl w-2/3 font-slim z-30 transition-all duration-300 ease-in-out">
        {cardText}
      </span>
      <div className="absolute opacity-0 group-hover:opacity-100 top-0 w-full h-full bg-grey900 group-hover:bg-[rgba(250,250,250,0.7)] transition-all duration-300 ease-in-out">
      </div>
    </div>
  )
}

export default CreationsCard