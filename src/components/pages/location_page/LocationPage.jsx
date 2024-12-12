import React from 'react'
import './LocationPage.css'
import { useParams } from 'react-router-dom'
import locations from '../../../data/apartments.json'
import Error from '../../error/Error'
import Tag from '../../tag/Tag'
import RatingStars from '../../rating_stars/RatingStars'
import HostCard from '../../host_card/HostCard'
import CollapseList from '../../collapse_list/CollapseList'
import Gallery from '../../gallery/Gallery'

export default function LocationPage() {

    const { id } = useParams()
    const location = locations.find(loc => loc.id === id)


    if (!location) {
        return <Error />
    }

    return (
        <div className='location-page'>
            <div className='location-image'>
                <Gallery pictures={location.pictures} />
            </div>
            <div className='location-info'>
                <div className='location-name-tags'>
                    <p className='title'>{location.title}</p>
                    <p className='location'>{location.location}</p>
                    <div className='tag-list'>
                        {
                            location.tags.map((tag, index) => (
                                <Tag tags={tag} key={index} />
                            ))
                        }
                    </div>
                </div>
                <div className='location-host-and-rating'>
                    <HostCard picture={location.host.picture} name={location.host.name} />
                    <RatingStars rating={location.rating} id={location.id} />
                </div>
            </div>
            <div className='collapse-list-container'>
                <CollapseList 
                    title='Description' 
                    items={location.description} />
                <CollapseList 
                    title="Equipements" 
                    items={location.equipments}/>
            </div>
        </div>
    )
}
