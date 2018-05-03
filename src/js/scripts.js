/* nav hamburger menu */
(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function() {
       this.classList.toggle("change");
       document.getElementsByClassName('menu__nav')[0].classList.toggle("is-close");
   });
})()
/* end menu */
//
// var grid = document.querySelector('.grid');
// var msnry;
//
// imagesLoaded( grid, function() {
//     // init Isotope after all images have loaded
//     msnry = new Masonry( grid, {
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-sizer',
//         percentPosition: true
//     });
// });

function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
    var g = document.querySelector(grid),
        gc = document.querySelectorAll(gridCell),
        gcLength = gc.length,
        gHeight = 0,
        i;

    for(i=0; i<gcLength; ++i) {
        gHeight+=gc[i].offsetHeight+parseInt(gridGutter);
    }

    if(window.screen.width >= 1024)
        g.style.height = gHeight/dGridCol + gHeight/(gcLength+1) + "px";
    else if(window.screen.width < 1024 && window.screen.width >= 768)
        g.style.height = gHeight/tGridCol + gHeight/(gcLength+1) + "px";
    else
        g.style.height = gHeight/mGridCol + gHeight/(gcLength+1) + "px";
}

["resize", "load"].forEach(function(event) {
    window.addEventListener(event, function () {
        imagesLoaded(document.querySelector('.masonry'), function () {
            // A maonsry grid with 8px gutter, with 3 columns on desktop, 2 on tablet, and 1 column on mobile devices.
            masonry(".masonry", ".masonry-brick", 8, 3, 2, 1);
        });
    });
});

