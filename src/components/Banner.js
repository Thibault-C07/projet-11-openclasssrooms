import React from 'react'
import '../styles/Banner.css'
import bannerImage1 from '../assets/bannerImage1.png'

function Banner() {
    return (
        <div className='banner'>
            <img src={bannerImage1} alt="Banner" />

        <div className='banner-text'>
            Chez vous, partout et ailleurs
        </div>

        </div>
    )
}

export default Banner