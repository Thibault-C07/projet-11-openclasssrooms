import React from 'react'
import '../styles/Banner.css'


const Banner = ({ image, text }) => {
    return (
                <div className='banner'>
                    {image}
                {text !== undefined && <div className='banner-text'>
                    {text}
                </div>}
                </div>
            )
}

export default Banner;


// export const BannerHome = () => {
//     return (
//         <div className='banner'>
//             <img src={bannerImage1} alt="Banner accueil" className="banner-image-home"/>

//         <div className='banner-text'>
//             Chez vous, partout et ailleurs
//         </div>
//         </div>
//     )
// }

// export const BannerAbout = () => {
//     return (
//         <div className='banner'>
//             <img src={bannerImage2} alt="Banner à propos" className="banner-image-about" />
//         </div>
//     )
// }