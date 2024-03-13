import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import bannerImage1 from '../assets/bannerImage1.png'

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Banner
          image={
            <img
              src={bannerImage1}
              alt="Banner accueil"
              className="banner-image-home"
            />
          }
          text="Chez vous, partout et ailleurs"
        />
        <Card />
      </Layout>
      <Footer />
    </>
  )
}

export default Home
