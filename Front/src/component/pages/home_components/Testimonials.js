import React, {useState, useEffect} from 'react'

// redux
import { useSelector} from 'react-redux';

export const Testimonials = () => {
    let testimonial = useSelector((state) => state.testimonials.value)

    function getRandomTestimonials(testimonials, number) {
        let good_testimonials = testimonials.filter(element => element.stars > 2)
        let shuffled = good_testimonials.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, number);
    }
    
    let newTesti = getRandomTestimonials(testimonial, 7)


    function slidingTestimonial(direction){
        const divTesti = document.querySelectorAll('.testi_div')

        if (direction === "left"){
            let maDiv = divTesti[divTesti.length - 1]
            let duplicateTesti = maDiv.cloneNode(true)
            const container = document.querySelector('#slider_testimonials div')
            container.insertBefore(duplicateTesti, container.firstChild)

            maDiv.remove()
        }else{
            let maDiv = divTesti[0]
            let duplicateTesti = maDiv.cloneNode(true)
            const container = document.querySelector('#slider_testimonials div')
            container.appendChild(duplicateTesti)

            maDiv.remove()
        }
    }

    return(
        <section id="testimonials">
            <button onClick={() => slidingTestimonial("left")}> <i class="bi bi-arrow-bar-left"></i> </button>
            <div id="slider_testimonials">
                <div>
                    {
                        newTesti.map((element,index)=>(
                            <div className="testi_div">
                                    <div className="stars">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <div key={i}>
                                                {i < element.stars ? (
                                                    <div className="star full"></div>
                                                ) : (
                                                    <div className="star out"></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <p>{element.testimonial}</p>

                                    <p>_ {element.name} {element.surname} _</p>

                                    <p>{element.stars} <i class="bi bi-star"></i></p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <button onClick={() => slidingTestimonial("right")}> <i class="bi bi-arrow-bar-right"></i> </button>
        </section>
    )
}