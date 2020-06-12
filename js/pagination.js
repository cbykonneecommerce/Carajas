$(document).ready(function() {
    $(".pages li.previous", "body").html("<img src='/arquivos/bola1.png' style='max-width:65%'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/bola2.png' style='max-width:65%'/>")
    
});
setInterval(()=>{
    $(".pages li.previous", "body").html("<img src='/arquivos/bola1.png' style='max-width:65%'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/bola2.png' style='max-width:65%'/>")
   }, 1000)