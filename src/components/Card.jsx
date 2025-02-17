import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
function Card({ title, img }) {
    return (
        <div className='Card' >
            <Link to='/gokarna'>
                <img src='https://templeinkarnataka.com/wp-content/uploads/2024/08/Mahabaleshwara-Temple1.png' />
                <p>Gokarna</p>
            </Link>
        </div>
    )
}

export default Card
