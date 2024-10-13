import React, {useState,useEffect} from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Menu = (props) => {

    useEffect(()=>{
        let global_menu = document.getElementById('global_menu')
        let global_menu_link = global_menu.querySelectorAll('button')

        global_menu_link.forEach((element) => {
            element.addEventListener('mouseover',(e)=>{
                global_menu_link.forEach((element)=>{
                    element.className = ''

                    element.parentNode.querySelectorAll('a').forEach((element)=>{
                        element.style.margin = '-20px'
                        element.style.opacity = 0
                    })
                })

                e.target.className='menu_link_hover'

                e.target.parentNode.querySelectorAll('a').forEach((element)=>{
                    element.style.margin = ' 0 50px'
                    element.style.opacity = 1
                })
            })
        })
    },[])


    return(
        <div style={{height: !props.open_menu && '0vh'}} id="global_menu">
            
            <div>
                <NavLink>Our News</NavLink>
                <button>News</button>  
                <NavLink>Community Blog</NavLink>
            </div>
            
            <div>
                <NavLink>Discover</NavLink>
                <button>Artists</button>
                <NavLink>Our falling for</NavLink>
            </div>

            <div>
                <NavLink>Concerts</NavLink>
                <button>Events</button>
                <NavLink>Festivals</NavLink>
            </div>
             
        </div>
    )
}