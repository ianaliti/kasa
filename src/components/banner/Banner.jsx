import React from 'react'
import './Banner.scss'

export default function Banner({ src, text, hasBackgroundColor = true }) {

  return (
    <div className='banner-container'>
      <div className='banner'
        style={{ backgroundImage: `url(${src})` }}>
        <div className='banner-cover'
          style={{
            backgroundColor: hasBackgroundColor ? 'black' : 'transparent',
            opacity: hasBackgroundColor ? 0.6 : 1,
          }}>
        </div>
        <h2 className='banner-text'>{text}</h2>
      </div>
    </div>
  )
}