import React, {useState} from 'react'

// models
import Tickets from './models/Tickets'

// redux
import { useSelector} from 'react-redux';


function Concerts() {
  window.addEventListener('scroll',()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  })


  return (
    <section id="concerts">
        <div id="cards">
            <Tickets />
        </div>

        <div id="decoration">
          <div id="oval_decoration"></div>
          <div id="slider">
            Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_
          </div>
        </div>
    </section>
  )
}

export default Concerts