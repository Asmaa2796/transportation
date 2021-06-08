import React from 'react'
import Navbar from '../components/Navbar.js';
import Header from '../components/Header';
import Services from '../components/Services';
import Statistics from '../components/Statistics';
import Estimate from '../components/Estimate';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar/>
            <Header/>
            <Services/>
            <Statistics/>
            <Estimate/>
            <Pricing/>
            <Footer/>
        </>
    )
}
