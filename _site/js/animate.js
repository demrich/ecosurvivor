var $win = $(window);

// $win.on('scroll', function () {
//   var top = $win.scrollTop() / 3;
//            if ($(this).scrollTop() > 750) {
//                $('.remote').fadeIn(600);
//            } else {
//                $('.remote').fadeOut(600);
//            }
//
//    });



//Correct way of managing responsive web animations

 function log(txt) {
    $("#log").html("location : <b>" + txt + "</b> px")
  }

  
  $(function() {
    var remoteTop = $('#remote').offset().top; //get the offset top of the element
  
    $(window).scroll(function() { //when window is scrolled
        var remote = remoteTop - $(window).scrollTop();

        if (remote < 500) {
            $('.remote3').fadeIn(300);
        } else {
            $('.remote3').fadeOut(300);
        };

        if (remote < 420) {
            $('.remote2').fadeIn(300);
        } else {
            $('.remote2').fadeOut(300);
        };


        if (remote < 350) {
            $('.remote').fadeIn(300);
        } else {
            $('.remote').fadeOut(300);
        };
    });


    var lampTop = $('#lamp').offset().top; //get the offset top of the element    
    $(window).scroll(function() { //when window is scrolled
        var lamp = lampTop - $(window).scrollTop();

        if (lamp < 400) {
            $('#lamp .lamp-on').fadeIn(600);
        } else {
            $('#lamp .lamp-on').fadeOut(600);
        };

        if (lamp < 350) {
            $('#lamp .light-lines').fadeIn(600);
        } else {
            $('#lamp .light-lines').fadeOut(600);
        };

    });
  });

  var doorTop = $('#door_swap').offset().top; //get the offset top of the element    
  $(window).scroll(function() { //when window is scrolled
      var door = doorTop - $(window).scrollTop();
          
      if(door < 350){
        $('#door_swap').css('background', "url(./img/svg/door-open-14.svg) no-repeat center center");

      } else
      {      
        $('#door_swap').css('background', "url(./img/svg/door-closed-13.svg) no-repeat center center");       
      }

 
  });

  var lampTop1 = $('#lamp1').offset().top; //get the offset top of the element    
  $(window).scroll(function() { //when window is scrolled
      var lamp1 = lampTop1 - $(window).scrollTop();
      

      if (lamp1 < 350) {
          $('#lamp1 .lamp-on').fadeIn(600);
      } else {
          $('#lamp1 .lamp-on').fadeOut(600);
      };

      if (lamp1 < 290) {
          $('#lamp1 .light-lines').fadeIn(600);
      } else {
          $('#lamp1 .light-lines').fadeOut(600);
      };

  });

  var motionSensorTop = $('#motion-control').offset().top;
  $(window).scroll(function(){
    var motionSensor = motionSensorTop -$(window).scrollTop();
    log(motionSensor);

    function shiftMan() {
        $('.man-fill').fadeIn(800);
    }


    if (motionSensor < 400) {
        shiftMan();
    } else {
        $('.man-fill').fadeOut(200);
    }

    if (motionSensor < 300) {
        $('.device-fill').fadeIn(200);
    } else {
        $('.device-fill').fadeOut(200);
    }

    if (motionSensor < 185){
        $('.circle-fill.three').fadeIn(500);
    } else {
        $('.circle-fill.three').fadeOut(500);
    }

    if (motionSensor < 170){
        $('.circle-fill.two').fadeIn(200);
    } else {
        $('.circle-fill.two').fadeOut(200);
    }

    if (motionSensor < 150){
        $('.circle-fill.one').fadeIn(200);
    } else {
        $('.circle-fill.one').fadeOut(200);
    }   
    
    var lampTop = $('#lamp2').offset().top; //get the offset top of the element    
    $(window).scroll(function() { //when window is scrolled
        var lamp = lampTop - $(window).scrollTop();

        if (lamp < 300) {
            $('#lamp2 .lamp-on').fadeIn(600);
        } else {
            $('#lamp2 .lamp-on').fadeOut(600);
        };

        if (lamp < 250) {
            $('#lamp2 .light-lines').fadeIn(600);
        } else {
            $('#lamp2 .light-lines').fadeOut(600);
        };

    });

  });



