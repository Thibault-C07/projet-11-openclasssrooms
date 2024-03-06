import React from 'react'
import '../styles/Banner.css'
import bannerImage1 from '../assets/bannerImage1.png'
import bannerImage2 from '../assets/bannerImage2.png'

export const BannerHome = () => {
    return (
        <div className='banner'>
            <img src={bannerImage1} alt="Banner accueil" className="banner-image-home"/>

        <div className='banner-text'>
            Chez vous, partout et ailleurs
        </div>
        </div>
    )
}

export const BannerAbout = () => {
    return (
        <div className='banner'>
            <img src={bannerImage2} alt="Banner à propos" className="banner-image-about" />
        </div>
    )
}