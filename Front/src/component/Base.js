import React, {useState, useEffect} from 'react'
import { Outlet, NavLink } from 'react-router-dom'

//lil_features
import { Loading } from './small_components/LoadingPage'
import { BackTop } from './small_components/BackTop'
import { Cursor } from './small_components/Cursor'

// base_components
import { BigNav } from './base_components/BigNav'
import { Footer } from './base_components/Footer'

export const Base = () => {
  let [isLoaded, setIsLoaded] = useState(false)
  let [percent, setPercent] = useState(0)

  useEffect(()=>{
    let imageUrls = [
        '../images/grain_effect.png',
        '../images/texture.jpg'
    ]
    let loadedImagesCount = 0

    let imageLoaded = () => {
        loadedImagesCount += 1

        if(loadedImagesCount === imageUrls.length) {
            
            let myInterval = setInterval(() => {
                percent += 1
                setPercent( percent )

                if(percent === 180){
                    setIsLoaded(true)
                    clearInterval(myInterval)
                }
            }, 25)
        }
    }

    imageUrls.forEach((src) => {
        let img = new Image()

        img.src = src

        if(img.complete) {
            imageLoaded()
        }else{
            img.onload = imageLoaded
            img.onerror = imageLoaded
        }
    })
  },[])

  return (
    <div id="base">
      { !isLoaded && <Loading count={ percent }/> }

      <BigNav />
    
      {/* Page content */}
      <Outlet/> 

      <BackTop />
      <Cursor />
      
      <div id="background"></div>

      <Footer />
    </div>
  )
}
