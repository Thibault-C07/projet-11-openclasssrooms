import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Caroussel from '../components/Caroussel'

const Logements = () => {
  return (
    <>
      <Layout>
        <Header />
        <Caroussel />
      </Layout>
      <Footer />
    </>
  )
}

export default Logements
