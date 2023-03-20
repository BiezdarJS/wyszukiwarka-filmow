
const db_record_slider_1 = $('.db-record-more-like-this-list');
db_record_slider_1.owlCarousel({
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        autoplay:false,
        autoplayTimeout: 500,
        autoplayHoverPause:true,
        dotsContainer: '.db-record-more-like-this-list-nav',
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