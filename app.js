const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

const videoToggle = () => {
    const trailer = document.querySelector('.trailer')
    trailer.classList.toggle('active')
}