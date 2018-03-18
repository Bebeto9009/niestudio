/* nav hamburger menu */
(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function() {
       this.classList.toggle("change");
       document.getElementsByClassName('menu__nav')[0].classList.toggle("is-close");
   });
})()
/* end menu */

