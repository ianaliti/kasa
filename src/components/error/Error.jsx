import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='error-page'>
            <h1>404</h1>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link>
                <p>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}
