import React from "react";
import Header from '../components/Header';
import Layout from "../components/Layout";
import Footer from '../components/Footer';
import Error from '../components/Error';


const Error404 = () => {
    return (
        <>
            <Layout>
            <Header />
            <Error />
            </Layout>
            <Footer />
        </>

    )
}

export default Error404;