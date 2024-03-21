import React from 'react'
import '../styles/Banner.scss'

const Banner = ({ image, firstText, secondText }) => {
  return (
    <div className="banner">
      {image}
      {firstText !== undefined && (
        <div className="banner-text">
          {firstText}
          <span className="text-responsive">{secondText}</span>
        </div>
      )}
    </div>
  )
}

export default Banner

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
