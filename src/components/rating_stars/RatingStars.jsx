import React from 'react'
import './RatingStars.css'

export default function RatingStars({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating-stars">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  )
}
