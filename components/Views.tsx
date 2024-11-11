import React from 'react'
import Ping from './Ping'

const Views = ({id}: {id: string}) => {
  return (
    <div className='view-container'>
        <div className='absolute -top-2 -right-2'>
            <Ping/>
        </div>

        <p className='view-text '>
            <span>100 views</span>
        </p>
    </div>
  )
}

export default Views