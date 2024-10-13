import React, { useState, useEffect } from 'react';

// bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

// redux
import { useSelector} from 'react-redux';

export const Introduction = () => {
  let [open, setOpen] = useState(4);

  let vignettes = useSelector((state) => state.vitrine.value)

  useEffect(() => {
    let lastScrollTop = 0;

    let handleScroll = () => {
      let images = document.getElementById("vignette_image");
      let imagesRect = images.getBoundingClientRect();
      let topPosition = imagesRect.top + window.scrollY;
      let bottomPosition = imagesRect.bottom + window.scrollY;
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        if (currentScroll >= topPosition - 150) {
          let bigger = vignettes.length - 1;

          images.querySelectorAll(".vignette").forEach((element) => {
            element.classList.add('biggerImage');
            element.style.marginTop = bigger * 40 + "px";
            element.querySelector("div").style.opacity = "1";
            document.querySelector("#introduction").style.opacity = "0";
            bigger -= 1;
          });
        }
      } else {
        if (currentScroll <= bottomPosition - 600) {
          setOpen(4)

          images.querySelectorAll(".vignette").forEach((element) => {
            element.classList.remove('biggerImage');
            element.style.marginTop = "inherit";
            element.querySelector("div").style.opacity = "0";
            document.querySelector("#introduction").style.opacity = "1";
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
    <section id="artistes">
      <div>
        <h4>
          <div>SPOT</div>
          <span>
            Discover _ <br />
          </span>
        </h4>
        <p id="introduction">
          Welcome to melting spot, your gateway to the vibrant world of Belgian music. Our homepage is your starting point for discovering the latest news, upcoming concerts, and featured artists from the Belgian music scene. Whether you're here to explore new sounds or stay updated on your favorite bands, melting spot offers a dynamic platform to immerse yourself in Belgium's musical landscape.
        </p>
      </div>
      <div id="vignette_image">
        {vignettes.map((data) => (
          <div key={data.number} id={`vignette_${data.number}`} className="vignette" style={{ height: data.number > open ? "7vh" : "50vh"}}>
            <div style={{ justifyContent: data.number > open ? "flex-end" : "space-between"}}>
              <p style={{ height: data.number > open ? "0vh" : "inherit"}}>
                {data.text}

                <a href="" style={{ display: data.number > open ? "none" : "block"}}> DISCOVER</a>
              </p>


              <button onClick={() => setOpen(data.number)}>
                {data.title} <i style={{ transform: data.number === open ? "rotate(180deg)" : "inherit"}} className="bi bi-chevron-up"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
