import React from 'react'
import Cover from '../assets/images/manaliscenary.jpg'
import Cover1 from '../assets/images/jssr.jpg'
import Card from './Card'
import './Home.css'
function Home() {
    return (
        <>
            <div className='Homepage'>
                <h1>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui mauris, hendrerit quis purus non, iaculis vestibulum metus. Morbi pharetra nulla a consectetur volutpat. Vivamus dignissim mauris diam, eu pulvinar est ultrices in.
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
