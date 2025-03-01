import React from 'react'
import Cover from '../assets/images/manaliscenary.jpg'
import Cover1 from '../assets/images/jssr.jpg'
import Card from './Card'
import './Home.css'
function Home() {
    return (
        <>
            <div className='Homepage'>
                <h1>  Welcome to the JSSR Travel Journal.
                    It's short but worth the time..........
                </h1>

            </div>
            <div className='HomepageCards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home
