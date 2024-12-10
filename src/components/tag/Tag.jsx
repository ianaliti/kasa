import React from 'react'
import './Tag.css'

export default function Tag({tags}) {
  return (
    <div className='tag-container'>
        <p>{tags}</p>
    </div>
  )
}
