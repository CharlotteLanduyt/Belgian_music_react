// react
import { useState } from 'react'

// react_router
import { NavLink } from 'react-router-dom'

// base_components
import { Menu } from './Menu'

export const BigNav = () => {
    let [open_menu, setOpen_menu] = useState(false)

    return(
        <>
            <div id="deco_sentence">
                <p>From Belgian Scene</p>
            </div>

            <nav id="home_nav" style={{backgroundColor: open_menu && '#ebe8dabf'}}>
                <navbar>
                    <NavLink>MELTING SPOT_</NavLink>

                    <div>
                    <button><i class="bi bi-person-fill"></i></button>

                    <button onClick={()=> open_menu === false ? setOpen_menu(true) : setOpen_menu(false) }>
                        {open_menu === false ? <i class="bi bi-list"></i> : <i id="close_menu" class="bi bi-x-lg"></i>}
                    </button>
                    </div>
                </navbar>
                
                < Menu open_menu={open_menu} />
            </nav>
        </>
    )
}