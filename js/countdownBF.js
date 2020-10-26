  // Set the date we're counting down to
  var countDownDate = new Date("Nov 27, 2020 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
   // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
   // + minutes + "m " + seconds + "s ";

   $(".diasblock").html(`${days}`)
   $(".horasblock").html(`${hours}`)
   $(".minutosblock").html(`${minutes}`)
   $(".segundosblock").html(`${seconds}`)
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      $(".diasblock").html(`0`)
   $(".horasblock").html(`0`)
   $(".minutosblock").html(`0`)
   $(".segundosblock").html(`0`)
    }
  }, 1000);


  $(".dropdown-container").hide();


$(".dropdown-btn#regulamento1").toggle(() => {
   
    $(".dropdown-btn#regulamento1 i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#regulamento1").slideDown()
}, () => {
    $(".dropdown-container#regulamento1").slideUp()
    $(".dropdown-btn#regulamento1 i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#regulamento2").toggle(() => {
   
    $(".dropdown-btn#regulamento2 i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#regulamento2").slideDown()
}, () => {
    $(".dropdown-container#regulamento2").slideUp()
    $(".dropdown-btn#regulamento2 i").attr('class', 'fa fa-angle-down');
})




$(".dropdown-btn#regulamento3").toggle(() => {
   
    $(".dropdown-btn#regulamento3 i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#regulamento3").slideDown()
}, () => {
    $(".dropdown-container#regulamento3").slideUp()
    $(".dropdown-btn#regulamento3 i").attr('class', 'fa fa-angle-down');
})




