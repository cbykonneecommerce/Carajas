

$(document).ready(function () {

   
    let typeOfTracker = '';
    const mq = window.matchMedia("(max-width: 1100px)");
    if (mq.matches) {
        typeOfTracker = 'mob';
        console.log("1")
    } else {
        typeOfTracker = 'desk';
        console.log("2")
    }
    

  
      
    
    console.log("a")
    if(window.location.href.indexOf("cart") != -1){
        $(".container-cart").prepend(`<div id="tracker"><img src='/arquivos/carrinho-ball-${typeOfTracker}.png'/></div> `)
    
    }
      //  $(".container-cart").prepend(`<div id="tracker"><img src='/arquivos/carrinho-ball-${typeOfTracker}.png'/></div> `)
    

       setTimeout(()=>{
        $(".container-cart").prepend(`<div id="tracker"><img src='/arquivos/carrinho-ball-${typeOfTracker}.png'/></div> `)
    
       },1000)
    
    
    window.onhashchange = function() { 
        if($("#tracker")) {
            $("#tracker").html("");
        }
        
        if(window.location.href.indexOf("cart") != -1){
            $(".container-cart").prepend(`<div id="tracker"><img src='/arquivos/carrinho-ball-${typeOfTracker}.png'/></div> `)
        
        } else if (window.location.href.indexOf("profile") != -1) {
            $(".container-order-form").prepend(`<div id="tracker"><img src='/arquivos/id-ball-${typeOfTracker}.png'/></div> `)
        } else if (window.location.href.indexOf("shipping") != -1) {
            $(".container-order-form").prepend(`<div id="tracker"><img src='/arquivos/entrega-ball-${typeOfTracker}.png'/></div> `)
        } else if (window.location.href.indexOf("payment") != -1) {
            $(".container-order-form").prepend(`<div id="tracker"><img src='/arquivos/pag-ball-${typeOfTracker}.png'/></div> `)
        } 
    }
    
    
    
});