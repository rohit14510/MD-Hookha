$(document).ready(function(){

  $('.hero-section').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
$('.tes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

 

  $('.all').click(function(){
    $('.see-all2').css("display","block")
});

  var mixer = mixitup('.box-list');
  
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 250){  
      $('.menu').addClass("sticky");
  }
  else{
      $('.menu').removeClass("sticky");
  }
});


  document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
               
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            
        });

        //button
         const catButtons = document.querySelectorAll('.cat-btn');
  const productCards = document.querySelectorAll('.product-card');

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-category');

      productCards.forEach(card => {
        card.classList.add('d-none');
        if (card.getAttribute('data-category') === selectedCategory) {
          card.classList.remove('d-none');
        }
      });
    });
  });