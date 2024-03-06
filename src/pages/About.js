import React from "react";

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { BannerAbout } from '../components/Banner';
import About from '../components/About';


const AboutPage = () => {
    return (
        <>
            <Layout>
            <Header />
            <BannerAbout />
            <About />
            </Layout>
            <Footer />
        </>
    );
};

export default AboutPage;