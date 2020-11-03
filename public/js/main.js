/* eslint-disable no-restricted-globals */
window.addEventListener('scroll',()=>{
    var head=document.querySelector('header');
    head.classList.toggle('header-active',scrollY > 0);
});
