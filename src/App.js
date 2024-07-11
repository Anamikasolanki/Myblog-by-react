// import something from "somewhere";
import React from 'react';
import Tophead from './component/Tophead/Tophead';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Leftsidebar from './component/sidebar/Leftsidebar';
import Footer from './component/Footer/Footer';

// Function Defination Area
function App() {
    return (
        <>
            <Tophead/>
            <Header/>
            <Navbar/>
            <Leftsidebar/>
            <Footer/>
        </>
    );
}

// Exporting Area
export default App;
