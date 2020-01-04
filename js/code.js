$(function() {
    const header = $("#header");
    const introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();


    /* fixed Header */
    checkScroll(scrollOffset);
    $(window).on("scroll",function(){
        checkScroll(scrollOffset);
    });

    function checkScroll() {
        scrollOffset = $(this).scrollTop();

        console.log(scrollOffset);

        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* smooth scroll*/

    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
           scrollTop: blockOffset
        }, 500);
    });



    /*Nav Toggle*/
    $("#nav__toggle").on("click", function(e) {
        e.preventDefault()

        $("#nav").toggleClass("active");
    });



    /* circular-menu*/

        let items = $(".circular-menu__item");
        let button = $(".circular-menu__button");


        let active = false;

        const lenght = items.length;
        const arc = 2 * Math.PI * (1/lenght);
        const radius = 40;


        button.on('click', (e)=> {
         e.preventDefault();

        active = !active;

         if (active) {
         button.addClass('active');
         
             for (let i= 0; i < lenght; i++) {
                 const angle = i * arc;
                 const x = radius * Math.cos(angle);
                 const y = radius * Math.sin(angle);

                 items[i].style.left = 50 + x + '%';
                 items[i].style.top = 50 + y + '%';
              }

          } else {
            button.removeClass('active');

            for (let i = 0; i < lenght; i++) {
                items[i].removeAttribute('style');
            }
          }
        });
})
VANTA.NET({
  el: "#intro",
  color: 0x639591,
  maxDistance: 24.00,
  spacing: 20.00
})
