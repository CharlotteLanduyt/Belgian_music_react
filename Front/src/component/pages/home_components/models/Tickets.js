import React,{useState,useEffect} from 'react'

// redux
import { useSelector} from 'react-redux';

function Tickets() {
    let data_cards = useSelector((state) => state.concerts.value)
    let all_cards;

    useEffect(()=>{
        all_cards = document.querySelectorAll(".card")
    })
    

    function test(e){
        all_cards.forEach((element, index)=>{
            if(element !== e.target.parentNode){
                element.style.zIndex = window.getComputedStyle(element).zIndex*1 + 1
                
                element.style.transform = `rotate(${((window.getComputedStyle(element).zIndex*1+1)*10)}deg)`
            }else{
                element.style.marginLeft = "-1500px"
                element.style.zIndex = 0
                element.style.transform = `rotate(0deg)`
            }


            setTimeout(()=>{
                element.style.marginLeft = "0px"
            },500)
        })  
    }
    



  return (
    <>
        {
            data_cards.map((element,index)=>(
                <div id={`carte_${index}`} key={index} className="card" style={{ transform: `rotate(${(index*10)}deg)`, zIndex: index }}>
                    <div className="image" onClick={(e) => {test(e)}}>
                        <div className="image_text">
                            <div>
                                <p>{element.day} {element.month}</p>
                                <p>{element.year}</p>
                            </div>

                            <h1>
                                {element.artist}
                            </h1>
                        </div> 
                    </div>

                    <div className="ticket">
                        <button id={element.id} >Book</button>
                        <button>More</button>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default Tickets