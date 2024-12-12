import React, { useState } from 'react'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Gallery.css'

export default function Gallery({ pictures }) {

    const [currentPicture, setCurrentPicture] = useState(0)
    const picture = pictures[0]

    console.log(picture)

    const handleNext = () => {
        setCurrentPicture((prevIndex) => (prevIndex + 1) % pictures.length)
    }

    const handlePrev = () => {
        setCurrentPicture((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1)
    }

    return (
        <div className='gallery-list'>
            <div className='button-gallery'>
            <button className='chevron-left' onClick={handlePrev}> <FontAwesomeIcon icon={faChevronLeft} className="custom-size" /></button>
            <button className='chevron-right' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} className="custom-size" /></button>
            </div>
                <img src={pictures[currentPicture]} alt={`Picture-${currentPicture}`} />
        </div>
    )
}
