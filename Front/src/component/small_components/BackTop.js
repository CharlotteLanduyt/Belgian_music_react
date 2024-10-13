export const BackTop = ( ) => {
    window.addEventListener('scroll', function() {
        let backToTopButton = document.getElementById("scroll_back");
  
        if (window.pageYOffset > 450) {
            backToTopButton.style.opacity = 1;
            backToTopButton.style.pointerEvents = 'inherit';
        } else {
            backToTopButton.style.opacity = 0;
            backToTopButton.style.pointerEvents = 'none';
        }
    });

    return(
        <button id="scroll_back" onClick={ () => {window.scrollTo({ top: 0, behavior: 'smooth'})}}> 
            <i class="bi bi-caret-up-fill"></i> 

            <div id="label">
            Back to top
            </div>
        </button>
    )
}