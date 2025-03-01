import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import banglore from '../assets/images/banglore.jpg'
function Card({ title, img }) {
    return (
        <div className='Card' >
            <Link to='/1'>
                <img src={banglore} />
                <p>Bangalore (March 2022)</p>

            </Link>
        </div>
    )
}

export default Card
