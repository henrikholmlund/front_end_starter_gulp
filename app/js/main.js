/**
 * Created by henrikholmlund on 2016-04-06.
 */

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
   // direction: 'horisontal',
    //loop: true,
    initialSlide: 0,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',

    paginationClickable: true,
    autoHeight: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,

});
