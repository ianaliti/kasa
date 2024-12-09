import React from 'react'
import './LocationPage.css'
import { useParams } from 'react-router-dom'
import locations from '../../data/apartments.json'
import Error from '../error/Error'

export default function LocationPage() {

    const { id } = useParams()
    console.log(id)
    console.log(locations)

    const location = locations.find(loc => loc.id === id) 

    console.log(location.title)

    if (!location) {
        return <Error />
    }

  return (
    <div>
        <img src={location.cover} alt={location.title} />
        <div className='location-info'>
            <h1>{location.title}</h1>
            <p>{location.location}</p>
        </div>
    </div>
  )
}
