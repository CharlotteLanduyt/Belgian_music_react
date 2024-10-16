// react_router
import { NavLink } from "react-router-dom"

export const Footer = () => {
    return(
        <footer>
            <div>
                <div>
                    <NavLink id="logo">MELTING SPOT_</NavLink>

                    <p>
                        Tune in for the best beats, sweet riffs, and that unmistakable Belgian flair. Join us _ because good music knows no borders, but it might come with a side of waffles.
                        
                        <br />
                        <br />

                        Stay cool, stay Belgian.
                    </p>
                </div>

                <nav>
                    <NavLink>Who are we ?</NavLink>
                    <NavLink>FAQ</NavLink>
                    <NavLink>Contact</NavLink>
                </nav>
            </div>


            <div>
                <div id="social_links">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-tiktok"></i></a>
                    <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                </div>

                <p>© 2024 MeltingSpot. All rights reserved. | <NavLink>Privacy Policy</NavLink> | <NavLink>Terms of Use</NavLink> | <NavLink>Contact Us</NavLink></p>
            </div>
      </footer> 
    )
}