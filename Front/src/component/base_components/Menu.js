import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = (props) => {
    const [hoveredDiv, setHoveredDiv] = useState(1);

    function mouseLinkHandler(index) {
        setHoveredDiv(index)
    }

    return (
        <div className={ !props.open_menu ? 'close_menu' : ''} id="global_menu">
            
            <div onMouseOver={() => mouseLinkHandler(0)} className={hoveredDiv === 0 ? 'hover' : ''}>
                <NavLink to="#">Our News</NavLink>
                News
                <NavLink to="#">Community Blog</NavLink>
            </div>
            
            <div onMouseOver={() => mouseLinkHandler(1)} className={hoveredDiv === 1 ? 'hover' : ''}>
                <NavLink to="#">Discover</NavLink>
                Artists
                <NavLink to="#">Our falling for</NavLink>
            </div>

            <div onMouseOver={() => mouseLinkHandler(2)} className={hoveredDiv === 2 ? 'hover' : ''}>
                <NavLink to="#">Concerts</NavLink>
                Events
                <NavLink to="#">Festivals</NavLink>
            </div>

            <NavLink to="#" id="about_us_link">About us</NavLink>
        </div>
    );
}
