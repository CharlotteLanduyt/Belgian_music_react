export const Loading = ( props ) => {
    let goDown = false

    if(props.count > 110){
        goDown = true              
    }

    if(props.count > 150){
        let progress_bar = document.getElementById('progress_bar')
        let loading_page = document.getElementById('loading_page')

        progress_bar.style.width = '65vw'
        progress_bar.style.height = '23vh'
        progress_bar.style.borderRadius = '50%'
        progress_bar.style.top = '0'
        progress_bar.style.marginTop = '15vh'
        loading_page.style.background = 'none'
        progress_bar.style.opacity = '0'
    }

    return(
        <section id='loading_page'>
            <div style={{height: goDown ? '100vh' : '5vh'}} id="progress_bar">
                <div style={{width: `${props.count}%`}}>
                    <h1>{goDown && "WELCOME"}</h1>
                </div>
            </div>

            <p style={{ opacity: goDown ? '0' : '1'}}>{ props.count <= 100 ? props.count : 100 }%</p> 
        </section>
    )
}