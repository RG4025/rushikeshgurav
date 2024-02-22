$(document).ready(function () {

        $(".carousel").owlCarousel({
          items: 6,
          touchDrag: true,
          mouseDrag: true,
          margin: 25,
          loop: true,
          autoplay: true,
          nav: true,
          autoplayTimeOut: 1000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: false,
            },
          },
        });

        {

          function blinking(){
            $('.blinkIcon').toggleClass('invisible');
            // $('#blinkIcon').fadeIn(500);

          }
          
          setInterval(blinking,1000);
        }

        {

          
          
          $('#button').on('click',function(){
          let empty1 = document.getElementById("email_one").value;
          let empty2 = document.getElementById("subject_one").value;
          let empty3 = document.getElementById("message_one").value;
          let empty4 = document.getElementById("name_one").value;
          let a = '';

          if((empty1.length === 0) || (empty2.length === 0) || (empty3.length ===0) || (empty4.length === 0)){
            alert('The Contact form or some input value should not  be Empty!..');
            console.log( empty1)
            console.log(typeof a)
          }else{

            setTimeout(() => {
              let form = document.getElementById('form');
              form.reset();
              // location.reload(true);
              
            }, 6000);

          }
           
        })
      }

      {

        let year = document.getElementById('yearMain');
        
        let currYear = new Date();
        year.innerText = currYear.getFullYear();
        
        console.log(currYear.getFullYear());
      }

      
});


// js for the sticky navbar

        var  scrolling = 0;
        navbar= document.getElementById('main_nav_fix');
        window.addEventListener('scroll',function(){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if(scrollTop > scrolling){
            navbar.style.top="-200px"
            navbar.style.transition = 'all ease 1s'
          }else{
            navbar.style.transition = 'all ease 1s'
            navbar.style.top="0px"

          }
          scrolling = scrollTop;
        })



// js for the typing effect

  
      //   const typed = document.querySelector('.typing');
      //   const typed2 = document.querySelector('.typing2');


      // const changeTyping2 = () =>{
      //   setTimeout(() => {
      //     // typed2.textContent='Java Full Stack Developer'
      //     typed.textContent='Full Stack Developer'
      //   }, 0);
      //   setTimeout(() => {
      //     // typed2.textContent='UI/UX Designer'
      //     typed.textContent='UI/UX Designer'
      //     }, 4000);
          
      //   }
      //   changeTyping2();

      //   setInterval(changeTyping2, 4000);
      
      var typed = new Typed(".typing , typing2", {
        strings: ["UI / UX Developer", "UI / UX Designer"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
      });

      // var typed2 = new Typed("typing2", {
      //   strings: ["UI / UX Developer", "UI / UX Designer"],
      //   typeSpeed: 50,
      //   backSpeed: 20,
      //   loop: true
      // });


      // js for the theme changing of the body
      document.getElementById("Theme_change").onclick = function () {
        document.body.classList.toggle("dark_theme");
        let icon = document.getElementById("change_icon");
        icon.classList.toggle("bi-sun");
      };




// form script

      const sumBtn = document.getElementById("button");



      document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        sumBtn.value = "sending..";

        const serviceId = "service_eql3fxd";
        const templetId = "template_84cllel";

        emailjs.send("service_eql3fxd", "template_84cllel", {
          to_name: document.getElementById("name_one").value,
          email_id: document.getElementById("email_one").value,
          subject: document.getElementById("subject_one").value,
          message: document.getElementById("message_one").value,
        });

        emailjs.sendForm(serviceId, templetId, this).then(
          () => {
            sumBtn.value = " Send Email";

            // alert('Mail Send Successfully Thank You!..')
            (function function3() {
              swal("Thank You!", "Mail Send Successfully!", "success");
            })();
          },
          (error) => {
            sumBtn.value = " ";
            //   alert(JSON.stringify(error));
            (function function4() {
              error(
                swal(
                  "Sorry!",
                  "Opps, something went wrong. Please try again later.",
                  "error"
                )
              );
            })();
          }
        );
      });




      // AOS animation init script
      AOS.init();
      
