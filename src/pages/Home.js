import React from "react";
import Header from '../components/Header';
import { BannerHome } from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Layout from '../components/Layout';


const Home = () => {
    return (
        <>
            <Layout>
                <Header />
                <BannerHome />
                <Card />
            </Layout>
            <Footer />
        </>
    );
};

export default Home;