import React from 'react'
import locations from '../../data/apartments.json'
import Card from '../card/Card'
import './CardList.css'
import { Link } from 'react-router-dom'

export default function CardList() {
    return (
        <div className='card-list-container'>
            <div className='card-list'>
                {
                    locations.map((location) => (
                        <Link key={location.id} to={`/location/${location.id}`}>
                         <Card
                            title={location.title}
                            cover={location.cover}
                        />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
