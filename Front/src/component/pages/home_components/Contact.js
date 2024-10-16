import React, { useState, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export const Contact = () => {
    let [testiStars, setTestiStars] = useState(5)

    const myStars = (e) => {
        if(e.target.className === 'star full' ){
            testiStars -= 1
            e.target.className = 'star out'
        }else{
            testiStars += 1
            e.target.className = 'star full'
        }
        
        setTestiStars(testiStars)
    }

    return(
        <section id="contact">
            <div>
                <div>
                    <input type="text" placeholder="Name" required/>
                    <input type="text" placeholder="Surname" required/>
                    <textarea maxLength='200' placeholder='Share your opinion'></textarea>

                    <div id='stars_opinion'>
                        <input type="hidden" name="stars" value={testiStars}/>

                        <div>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <button className="star full" onClick={(e)=>{myStars(e)}}></button>
                            ))}
                        </div>

                        <p>{testiStars}/5</p>
                    </div>

                    <input type="submit" value="Send" />
                </div>

                <div><div className="oval_contact"> Your opinion </div></div>
            </div>

            <div>
                <div>
                    <div style={{display: "flex", width: "73%"}}>
                        <input type="text" placeholder="Name" required/>
                        <input type="text" placeholder="Surname" required/>
                    </div>

                    <input type="email" placeholder="Your email"/>
                    <textarea maxLength='500' placeholder='Your message' style={{height: "120px"}}></textarea>

                    <input type="submit" value="Send" style={{marginTop: "30px"}}/>
                </div>

                <div>Contact <i class="bi bi-globe2"></i> Us</div>
            </div>
        </section>
    )
}