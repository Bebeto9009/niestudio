/* nav hamburger menu */
(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function() {
       this.classList.toggle("change");
       document.getElementsByClassName('menu__nav')[0].classList.toggle("is-close");
   });
})()
/* end menu */

var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
});