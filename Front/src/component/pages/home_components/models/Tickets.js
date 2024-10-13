import React,{useState} from 'react'

// redux
import { useSelector} from 'react-redux';

function Cards() {
    let [mes_cartes, setCartes] = useState( useSelector((state) => state.concerts.value) )

    function test(e){  
        let nouvelleListe = [...mes_cartes];
        let click = nouvelleListe.find(element => element.id === Number(e.target.className));
        
        let ma_carte = document.getElementById(click.id)

        let marginRight = 0;
        let sens = true

        function maTranslation() {
            document.getElementById('cartes').style.transform = 'rotate(-2deg)'
            
            if(sens === true && marginRight <= 25) {
                ma_carte.style.marginRight = `${marginRight + 0.5}vw`;
                marginRight += 0.5

                if(marginRight === 25){
                    sens = false
                }

            }else if(sens === false && marginRight > 0){
                ma_carte.style.zIndex = 0

                ma_carte.style.marginRight = `${marginRight - 0.5}vw`;
                marginRight -= 0.5         
                
                let all_cartes = document.querySelectorAll('.carte')
                let der_carte = all_cartes[0]

                ma_carte.style.transform = der_carte.style.transform
            }else {
                let all_cartes = document.querySelectorAll('.carte')
                all_cartes = [...all_cartes]

                ma_carte.style.zIndex = 2
                ma_carte.style.marginRight = '0vw'
                ma_carte.style.transform = `rotate(${(all_cartes.indexOf(ma_carte)*10)}deg)`

                clearInterval(ma_translation);
                document.getElementById('cartes').style.transform = 'rotate(2deg)'

                nouvelleListe.splice(mes_cartes.indexOf(click),1)
                nouvelleListe.unshift(click)  
        
                setCartes(nouvelleListe)
            }
        }

        let ma_translation = setInterval(maTranslation, 5)
    }

    function openWindow(e){
        let open_window = document.getElementById(`ticket_window_${e.target.id}`)

        open_window.style.opacity = 1
        open_window.style.pointerEvents = 'inherit'


        let ticketFirstInfo = document.querySelectorAll(".ticket_first_info")
        ticketFirstInfo.forEach((element)=>{
            element.style.fontSize = "13px"
        })

        let ticketSecondInfo = document.querySelectorAll(".ticket_second_info")
        ticketSecondInfo.forEach((element)=>{
            element.style.fontSize = "18px"
        })

    }

  return (
    <>
        {
            mes_cartes.map((element,index)=>(
                <div id={element.id} key={index} className="carte" style={{ transform: `rotate(${(index*10)}deg)` }}>
                    <div className="image">
                        <div className="image_text">
                            <div>
                                <p>{element.day} {element.month}</p>
                                <p>{element.year}</p>
                            </div>

                            <h1>
                                {element.artiste}
                            </h1>
                        </div> 

                        <div id="click" className={element.id} onClick={test}></div>  
                    </div>

                    <div className="ticket">
                        <button id={element.id} onClick={openWindow}>Book</button>
                        <button>More</button>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default Cards