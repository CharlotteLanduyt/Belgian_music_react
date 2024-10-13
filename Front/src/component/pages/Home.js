import React, { useState, useEffect } from 'react'

// components
import Concerts from './home_components/Concerts'
import { Introduction } from './home_components/Introduction'
import { Styles } from './home_components/Styles'
import { Testimonials } from './home_components/Testimonials'
import { Contact } from './home_components/Contact'

export const Home = () => {

  return (
    <div id="home">    
        <header id="home_big_header"> 
            <div id="big_header_oval"></div>       

            <h1>
                ME
                <span id="l">
                    L
                    <div id="window">
                    </div>
                </span>
                <span id="t">
                    T
                    <div id="window">
                    </div>
                </span>
                ING
            </h1>
            
        </header>

        <Introduction />
        <Styles />
        <Concerts />
        <Testimonials />
        <Contact />
    </div>
  )
}
