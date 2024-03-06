import React from "react";

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner  from '../components/Banner';
import About from '../components/About';
import bannerImage2 from '../assets/bannerImage2.png'


const AboutPage = () => {
    return (
        <>
            <Layout>
            <Header />
            <Banner image={<img src={bannerImage2} alt="Banner à propos" className="banner-image-about" />}/>
            <About />
            </Layout>
            <Footer />
        </>
    );
};

export default AboutPage;