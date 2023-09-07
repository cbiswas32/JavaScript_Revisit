const hamburgerMenu = document.getElementById("hamburger-menu-toggle");
const hamburgerMenuDropDown = document.getElementById("hamburger-menu-dropdown");

hamburgerMenu.addEventListener( 'click', ()=>{
    hamburgerMenuDropDown.classList.toggle('hamburger-menu-opened');
}
)
