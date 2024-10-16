import React, { useState, useEffect } from 'react';

// bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

// redux
import { useSelector} from 'react-redux';

export const Introduction = () => {
  let [open, setOpen] = useState(5);

  let vignettes = useSelector((state) => state.vitrine.value)

  useEffect(()=>{
    document.querySelectorAll('.vignette').forEach((element) => {
      element.classList.remove('closed_vignette')
    })
    
    for(let i=open+1; i <= 5; i++){
      document.getElementById(`vignette_${i}`).classList.add('closed_vignette') 
    }
  }, [open])


  useEffect(() => {
    let lastScrollTop = 0;

    let handleScroll = () => {
      const images = document.getElementById("vignette_image");
      let imagesRect = images.getBoundingClientRect();
      let topPosition = imagesRect.top + window.scrollY;
      let bottomPosition = imagesRect.bottom + window.scrollY;
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        if (currentScroll >= topPosition - 150) {
          images.querySelectorAll(".vignette").forEach((element) => {
            element.classList.add('biggerImage');
          
            document.querySelector("#introduction").classList.add('introduction_opacity')
          });
        }
      } else {
        if (currentScroll <= bottomPosition - 1000) {
          setOpen(5)

          images.querySelectorAll(".vignette").forEach((element) => {
            element.classList.remove('biggerImage');
            document.querySelector("#introduction").classList.remove('introduction_opacity')
          });
        }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [vignettes]);

  return (
    <section id="artists">
        <h4>
          <div>SPOT</div>
          <span>
            Discover _ <br />
          </span>
        </h4>

        <div>
          <p id="introduction">
            Welcome to melting spot, your gateway to the vibrant world of Belgian music. Our homepage is your starting point for discovering the latest news, upcoming concerts, and featured artists from the Belgian music scene. Whether you're here to explore new sounds or stay updated on your favorite bands, melting spot offers a dynamic platform to immerse yourself in Belgium's musical landscape.
          </p>
        
          <div id="vignette_image">
            {vignettes.map((vignette) => (
              <div key={vignette.id} id={`vignette_${vignette.id}`} className="vignette">
                <div>
                  <p>
                    {vignette.text}

                    <a href=""> DISCOVER</a>
                  </p>


                  <button onClick={() => setOpen(vignette.id)}>
                    {vignette.title} <i className="bi bi-chevron-up"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};
