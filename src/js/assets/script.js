// =============================================================================
// MOBILE MENU
// =============================================================================


jQuery(function($) {

        $(document).ready(function(){
        windowSize();
        });
        $(window).resize(function(){
        windowSize();
        });

        // ANIMATE HAMBURGER MENU
        $('.hamburger-menu').on('click', function() {
                $('.hamburger-menu .bar').toggleClass('animate');
                if($('body').hasClass('open-menu')){
                        $('body').removeClass('open-menu');
                }else{
                        $('body').toggleClass('open-menu');
                }
        });

        // VERIFY WINDOW SIZE
        function windowSize() {
                var size = $(document).width();
                if (size >= 991) {
                        $('body').removeClass('open-menu');
                        $('.hamburger-menu .bar').removeClass('animate');
                }
        };

        // ESC BUTTON ACTION
        $(document).keyup(function(e) {
        if (e.keyCode == 27) {
                $('.bar').removeClass('animate');
                $('body').removeClass('open-menu');
                $('header .desk-menu .menu-container .menu .menu-item-has-children a ul').each(function( index ) {
                $(this).removeClass('open-sub');
                });
        }
        });

        $('body .over-menu').on('click', function() {
                $('body').removeClass('open-menu');
                $('.bar').removeClass('animate');
        });



});


// =============================================================================
// MORE LIKE THIS SLIDER
// =============================================================================

var db_record_slider_1 = $('.db-item-full-more-like-this-list');
db_record_slider_1.owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        autoplay:false,
        autoplayTimeout: 500,
        autoplayHoverPause:true,
        dotsContainer: '.db-item-full-more-like-this-list-nav',
        nav: true,
        margin: 0,              
        lazyLoad: true,
        responsive: {
                0: {
                        items: 1,
                            
                },
                600: {
                        items: 5
                },
                1000: {
                        items: 5
                }
        },
        loop: true
});


// =============================================================================
// POPUP
// =============================================================================

const openPopup = $('.action-btn-popup-js');
const closePopup = $('.popup-movie-db-close');
const popup_movie_db = $('.popup-movie-db-wrap');

openPopup.on("click", function(event) {
        event.preventDefault();
        popup_movie_db.fadeIn(150);
});
closePopup.on("click", function() {
        popup_movie_db.hide();
});


// =============================================================================
// CUSTOM SELECT
// =============================================================================

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


// =============================================================================
// HEADER SEARCH
// =============================================================================

jQuery(function($) {
  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var submitButton = $('.searchbox-submit');
  var isOpen = false;
  submitIcon.click(function(){
   if(isOpen == false){
    searchBox.addClass('searchbox-open');
    submitButton.css('visibility', 'visible')
    inputBox.focus();
    isOpen = true;
   } else {
    searchBox.removeClass('searchbox-open');
    inputBox.focusout();
    isOpen = false;
   }
  });
  
  function buttonUp(){
 var inputVal = $('.searchbox-input').val();
 inputVal = $.trim(inputVal).length;
 if( inputVal !== 0){
   //customize this line of code to show X
  //$('.searchbox-icon').css('display','none');
 } else {
  $('.searchbox-input').val('');
  $('.searchbox-icon').css('display','block');
 }
}
  inputBox.keyup(buttonUp);
});




// =============================================================================
// RANGE SLIDER
// =============================================================================

$( function() {
      $slider = $( "#slider-range" ).slider({
      range: true,
      min: 1900,
      max: 2022,
      values: [ 1985, 2000 ],
      slide: function( event, ui ) {
        adjust(ui.values[0], ui.values[1]);
      }
    });

        function adjust(min, max) {
                $slider.find('.ui-slider-handle:first-of-type').attr('data-content',min);
                $slider.find('.ui-slider-handle:last-of-type').attr('data-content',max);
        }
        var min = $slider.slider('values', 0);
        var max = $slider.slider('values', 1);
        adjust(min, max);


  } );



  