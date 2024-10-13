import React, {useState} from 'react'

// models
import Tickets from './models/Tickets'

// redux
import { useSelector} from 'react-redux';


function Concerts() {
  window.addEventListener('scroll',()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  })

  let mes_cartes = useSelector((state) => state.concerts.value)
  let [numberTickets, setNumberTickets] = useState(1)

  function BookTicketClose(){
    let ticketFirstInfo = document.querySelectorAll(".ticket_first_info")
    ticketFirstInfo.forEach((element)=>{
        element.style.fontSize = "18px"
    })

    let ticketSecondInfo = document.querySelectorAll(".ticket_second_info")
    ticketSecondInfo.forEach((element)=>{
        element.style.fontSize = "13px"
    })
  }

  return (
    <section id="vitrine">
        <div id="cartes">
            <Tickets />
        </div>

        <div id="text">
          <div id="ovale_vitrine"></div>
          <div id="slider">
            Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_Scene_
          </div>
        </div>

        {
            mes_cartes.map((element, index)=>(
                <div className="ticket_window" id={`ticket_window_${element.id}`}>
                  <div id="close" onClick={()=>{document.getElementById(`ticket_window_${element.id}`).style.opacity = '0'; document.getElementById(`ticket_window_${element.id}`).style.pointerEvents = 'none'; BookTicketClose()}}><i class="bi bi-x-lg"></i></div>

                  <div>
                    <div id="cd"><div></div></div>
                    <div id="cover">
                        <h4>{element.artiste}</h4>

                        <div id="form_ticket">
                          <input type="text" placeholder="name" required/>
                          <input type="text" placeholder="surname" required/>
                          <input type="email" placeholder="email" required/>

                          <div>
                            <p>Tickets <span>max. 5</span></p>
                            <button onClick={()=>{numberTickets - 1 >= 1 ? setNumberTickets(numberTickets - 1):setNumberTickets(numberTickets)}}>-</button>
                              <div>{numberTickets}</div>
                            <button onClick={()=>{numberTickets + 1 <= 5 ? setNumberTickets(numberTickets + 1):setNumberTickets(numberTickets)}}>+</button>
                          </div>

                          <div>
                            <div>
                              <input id="agree_terms&conditions" type="checkbox" name=""/>
                              <label for="agree_terms&conditions">I agree to the terms and conditions of use</label>
                            </div>
                          
                            <div>
                              <input id="agree_emails" type="checkbox" name=""/>
                              <label for="agree_emails">I agree to receive emails regarding updates from Melting Spot</label>
                            </div>
                          </div>
                        </div>

                        <button id="send_book_ticket">Validate</button>

                        <div id="ticket_info">
                          <span className="ticket_first_info">{element.day} / {element.month} / {element.year}</span>

                          <p>
                            <span className="ticket_second_info">{element.place}_</span>
                            <span className="ticket_second_info">{element.location}</span>
                          </p>

                          <span className="ticket_first_info">{element.time}</span>
                        </div>
                    </div>
                  </div>
                </div>
            ))
        }
    </section>
  )
}

export default Concerts