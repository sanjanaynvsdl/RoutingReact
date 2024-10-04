import React from 'react'
import {Outlet} from 'react-router-dom';

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


//react-router-dom -> Outlet (is the one which looks after -> As I need footer and Header in all the pages)
//This is the complete layout of our application
//Move to main.jsx
function Layout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>

    )
}

export default Layout