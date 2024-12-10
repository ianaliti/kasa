import React from 'react'
import './HostCard.css'

export default function HostCard({ name, picture }) {
  return (
    <div className='host'>
      <p>{name}</p>
      <div className='location-image'>
        <img src={picture} alt={name} />
      </div>
    </div>
  )
}
