import React from 'react'

const TicketCard = ({type, price}) => {
  return (
    <div className='flex flex-col text-left font-roboto'>
        <h2 className='text-2xl mb-3'>{price}</h2>
        <div>
            <p className='capitalize text-base'>{type}</p>
            <p className='text-sm'>20/50</p>
        </div>
    </div>
  )
}

export default TicketCard