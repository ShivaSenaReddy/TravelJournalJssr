import React from 'react'
import { experiences } from './experiences'
import { Link, NavLink, useParams } from 'react-router-dom'
function Experience() {
    const { id } = useParams()
    console.log(id)
    const days = experiences[id - 1].days;
    let daysLinkArray = new Array(days).fill(1)

    const newDaysLinkArray = daysLinkArray.map((el, i) => {
        return (
            <div className='Day'>
                {experiences[id - 1][`day${1}`]}

            </div>
        )
    })
    const experiencePhotos = experiences[id - 1].images.forEach(photo => <img src={photo} alt='photo' />)
    console.log(experiencePhotos)
    return (
        <div className='experience'>

            <div>
                <NavLink to='../'>Back to Home</NavLink>
            </div>
            <div className='experience-photos'>
                {experiencePhotos}
            </div>
            {experiences[id].description}
            {newDaysLinkArray}
        </div>
    )
}

export default Experience
