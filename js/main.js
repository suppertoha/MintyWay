$(document).ready(function () {
   
   // !Header__burger
   
   $('.header__burger').on('click', function(){
      $(this).toggleClass('active')
      $('.header__mobile').toggleClass('active')
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".header__burger, .header__mobile").length) {
         $(".header__mobile").removeClass("active");
         $(".header__burger").removeClass("active");
      }
      e.stopPropagation();
   });
   
   // ! Сommon slider

   new Swiper('.slider-container', {
      navigation: {
         nextEl: '.gallery__swiper-button-next',
         prevEl: '.gallery__swiper-button-prev',
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      // Отключение функционала, если слайдов меньше чем нужно

      watchOverflow: true,

      breakpoints: {
      }
   });

   const destination = new Swiper('.little-slider__container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      navigation: {
         nextEl: '.swiper-button-prev.popular__swiper-button-prev',
         prevEl: '.swiper-button-next.popular__swiper-button-next',
      },
      breakpoints: {
         767: {
            slidesPerView: 'auto',
            spaceBetween: 20,
         },
         991: {
            slidesPerView: 3,
            spaceBetween: 31,
         },
         1260: {
            slidesPerView: 4,
         },
      },
   })

   const hosts = new Swiper('.mini-collection__container', {
		slidesPerView: 'auto',
		slidesPerView: 3,
      spaceBetween: 8,
		loop: true,
		navigation: {
			nextEl: '.mini-collection__swiper-button-next',
			prevEl: '.mini-collection__swiper-button-prev',
      },
      
      breakpoints: {
         320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
         },

         991: {
            slidesPerView: 3,
            spaceBetween: 8,
         },
      },

	})

   
   // !Modal

   $('.explore__filter1').on('click', function(){
      $(this).toggleClass('active')
      $('.explore__body').toggleClass('active')
      $('.modal').toggleClass('active')
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".explore__filter1, .explore__body").length) {
         $(".explore__filter1").removeClass("active");
         $(".explore__body").removeClass("active");
         $(".modal").removeClass("active");
      }
      e.stopPropagation();
   });

    // ! header -search

   $('.header__search').on('click', function(){
      $(this).toggleClass('active')
      $('.form__intut').toggleClass('active')
      $('.search').toggleClass('active')
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".form__intut, .search").length) {
         $(".form__intut").removeClass("active");
         $(".header__search").removeClass("active");
         $(".search").removeClass("active");
      }
      e.stopPropagation();
   });

    // !  header - search - mobi

   $('.header__search-buttons').on('click', function(){
      $(this).toggleClass('active')
      $('.header__search-nav').toggleClass('active')
      $('.header__form-mobi').toggleClass('active')
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".header__search-nav, .header__form-mobi").length) {
         $(".header__search-nav").removeClass("active");
         $(".header__search-buttons").removeClass("active");
         $(".header__form-mobi").removeClass("active");
      }
      e.stopPropagation();
   });
   
   // !Dropdown
   
   $(".started__link").on("click", function () {
      if ($(window).width() < 767) {
      $(this).toggleClass('active')

         if ($(this).hasClass('active')) {
            $(this).next().toggleClass('active')
         } else {
            $(this).next().removeClass('active')
         }
      }
   });

   // dropdown-button__blockchain

   $('.dropdown-button__blockchain').on('click', function () {
      
      $(this).toggleClass('active')
      $('.blockchain').toggleClass('active')
      $('.dropdown-button').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown-button__blockchain,  .blockchain, .dropdown-button").length) {
         $(".dropdown-button__blockchain").removeClass("active");
         $(".blockchain").removeClass("active");
         $(".dropdown-button").removeClass("active");
      }
      e.stopPropagation();
   });


     // dropdown-button__category

   $('.dropdown-button__category').on('click', function () {
      
      $(this).toggleClass('active')
      $('.category').toggleClass('active')
      $('.dropdown-button').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown-button__category,  .category, .dropdown-button").length) {
         $(".dropdown-button__category").removeClass("active");
         $(".category").removeClass("active");
         $(".dropdown-button").removeClass("active");
      }
      e.stopPropagation();
   });


   // dropdown-button__collections

   $('.dropdown-button__collections').on('click', function () {
   
      $(this).toggleClass('active')
      $('.collections').toggleClass('active')
      $('.dropdown-button').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown-button__collections,  .collections, .dropdown-button").length) {
         $(".dropdown-button__collections").removeClass("active");
         $(".collections").removeClass("active");
         $(".dropdown-button").removeClass("active");
      }
      e.stopPropagation();
   });

   
   // dropdown-button__saletype

   $('.dropdown-button__saletype').on('click', function () {
      
      $(this).toggleClass('active')
      $('.saletype').toggleClass('active')
      $('.dropdown-button').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown-button__saletype,  .saletype, .dropdown-button").length) {
         $(".dropdown-button__saletype").removeClass("active");
         $(".saletype").removeClass("active");
         $(".dropdown-button").removeClass("active");
      }
      e.stopPropagation();
   });


   // dropdown-button__pricerange

   $('.dropdown-button__pricerange').on('click', function () {
      
      $(this).toggleClass('active')
      $('.pricerange').toggleClass('active')
      $('.dropdown-button').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown-button__pricerange,  .pricerange, .dropdown-button").length) {
         $(".dropdown-button__pricerange").removeClass("active");
         $(".pricerange").removeClass("active");
         $(".dropdown-button").removeClass("active");
      }
      e.stopPropagation();
   });

   // dropdown-button__recentlyadded

   $('.dropdown-button__recentlyadded').on('click', function () {
      
      $(this).toggleClass('active')
      $('.recentlyadded').toggleClass('active')
      $('.dropdown-button').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown-button__recentlyadded,  .recentlyadded, .dropdown-button").length) {
         $(".dropdown-button__recentlyadded").removeClass("active");
         $(".recentlyadded").removeClass("active");
         $(".dropdown-button").removeClass("active");
      }
      e.stopPropagation();
   });


   //! Input - pc

   $('.form__intut')
      .focus(function () { 
         $(this).css("background", "#33353F url(../images/search-focus.png) no-repeat 16px 50%"); 
		//$(this).css("background", "none"); 
	})
   .blur(function () { 
   
      if ($(this)[0].value == '') { 
         $(this).css("background", "url(../images/header-search_pc.png) no-repeat 16px 50%"); 
      } 
   
   });

   //! Profile modal-1

   $('.dropdowns-cart__link-1').on('click', function(){
      $(this).toggleClass('active')
      $('.modal-profile__inner modal-profile__close').toggleClass('active')
      $('.modal-profile__close').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdowns-cart__link-1, .modal-profile__inner, .modal-profile__close").length) {
         $(".modal-profile__inner").removeClass("active");
         $(".dropdowns-cart__link-1").removeClass("active");
         $('.modal-profile__close').toggleClass('active')
      }
      e.stopPropagation();
   });

   // profile modal-1

   $('.dropdowns-cart__link-2').on('click', function(){
      $(this).toggleClass('active')
      $('.modal-profile__inner').toggleClass('active')
      $('.modal-profile__close').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdowns-cart__link-2, .modal-profile__inner, .modal-profile__close").length) {
         $(".modal-profile__inner").removeClass("active");
         $(".dropdowns-cart__link-2").removeClass("active");
         $('.modal-profile__close').toggleClass('active')
      }
      e.stopPropagation();
   });

   //! Socium-button

   $('.socium-button__btn').on('click', function () {
      
      $(this).toggleClass('active')
      $('.socium-button__inner1').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".socium-button__btn,  .socium-button__inner1").length) {
         $(".socium-button__btn").removeClass("active");
         $(".socium-button__inner1").removeClass("active");
      }
      e.stopPropagation();
   });

   //(function($) {
   //   $(window).on('load', function() {
   //      $('.notifications__body').mCustomScrollbar({

   //         axis: 'y',              // вертикальный скролл
   //         theme: 'rounded-dark',  // тема
   //         scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах
   //         setHeight: '290px',      // высота блока (переписывает CSS)
   //         mouseWheel: {
   //             deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши
   //         }
   //      });
   //   });
   //})(jQuery);

      //! Notifications-button

   $('.notifications__btn').on('click', function () {
      
      $(this).toggleClass('active')
      $('.notifications__inner').toggleClass('active')
      
   })

   $(document).on("click", function (e) {
      if (!$(e.target).closest(".notifications__btn,  .notifications__inner").length) {
         $(".notifications__btn").removeClass("active");
         $(".notifications__inner").removeClass("active");
      }
      e.stopPropagation();
   });

      //! Button-form-mobi 1

      $('.button-form-1').on('click', function () {
   
         $(this).toggleClass('active')
         $('.form-create__wrap-1').toggleClass('active')
         
      })
   
      $(document).on("click", function (e) {
         if (!$(e.target).closest(".button-form-1, .form-create__wrap-1").length) {
            $(".button-form-1").removeClass("active");
            $(".form-create__wrap-1").removeClass("active");
         }
         e.stopPropagation();
      });
   
     //! Button-form-mobi 2

      $('.button-form-2').on('click', function () {
      
         $(this).toggleClass('active')
         $('.form-create__wrap-2').toggleClass('active')
         
      })

      $(document).on("click", function (e) {
         if (!$(e.target).closest(".button-form-2, .form-create__wrap-2").length) {
            $(".button-form-2").removeClass("active");
            $(".form-create__wrap-2").removeClass("active");
         }
         e.stopPropagation();
      });

});

document.addEventListener('DOMContentLoaded', () => {

   // Кнопка по которой происходит клик
   let callBackButton = document.getElementById('callback-button');

   // Модальное окно, которое необходимо открыть
   let modal1 = document.getElementById('modal-1');

   // Кнопка "закрыть" внутри модального окна
   let closeButton = modal1.getElementsByClassName('modal__close-button')[0];

   // Тег body для запрета прокрутки
   let tagBody = document.getElementsByTagName('body');

   callBackButton.onclick = function (e) {
   e.preventDefault();
   modal1.classList.add('modal_active');
   tagBody.classList.add('hidden');
   }

   closeButton.onclick = function (e) {
   e.preventDefault();
   modal1.classList.remove('modal_active');
   tagBody.classList.remove('hidden');
   }

   modal1.onmousedown = function (e) {
   let target = e.target;
   let modalContent = modal1.getElementsByClassName('modal__content')[0];
   if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
   }
   };

   // Вызов модального окна несколькими кнопками на странице
   let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');

   for (let button of buttonOpenModal1) {
   button.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
   }
   }

});





