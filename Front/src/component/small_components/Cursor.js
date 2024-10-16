import { useEffect } from "react"

export const Cursor = () => {

    useEffect(()=>{
        const cursor = document.getElementById('new_page_cursor')

        document.addEventListener('mousemove', (e)=>{
            cursor.style.left = e.clientX - (cursor.offsetHeight/2) + 'px'
            cursor.style.top = e.clientY - (cursor.offsetHeight/2) + window.scrollY + 'px'
        })

        const hoverElements = document.querySelectorAll('a, button')

        hoverElements.forEach((element)=>{
            element.addEventListener('mouseover',()=>{
                cursor.className = 'cursor_hover'
            })

            element.addEventListener('mouseout',()=>{
                cursor.className = 'cursor_not_hover'
            })
        })



        const my_cards = document.querySelectorAll('.card .image')

        my_cards.forEach((element)=>{
            element.addEventListener('mouseover',()=>{
                cursor.innerHTML = '<p> Click </p>'
            })

            element.addEventListener('mouseout',()=>{
                cursor.innerHTML = ''
            })
        })
    },[])

    return(
        <div id="new_page_cursor" className='cursor_not_hover'>
        </div>
    )
}