let sku = 0;

function BatchBuy_OnSkuDataReceived(e) {
    var id = e.skuData.id;
    selectedToBuy = [];
    if (id > 0) {
        console.log(e.skuData);
        sku = e.skuData.id;
    }
}


$(document).ready(function() {

    if(!skuJson.available) {
        $(".add-to-cart-button").hide();
    }

    const mq = window.matchMedia("(max-width: 900px)");

    if(mq.matches && skuJson.available) {
        $(".buy-button-box").hide()
    }
    if (mq.matches) {

       

        const imgsLength = $(".product-image .apresentacao .thumbs a img").length;

        for(let i= 0; i < imgsLength; i++) {
            let imgProduct = $($(".product-image .apresentacao .thumbs a img")[i]).attr("src");
            imgProduct = imgProduct.replace(/-55-55/g, '-500-500');
            $($(".product-image .apresentacao .thumbs a img")[i]).attr("src",imgProduct);
        }

        
        $(".product-image .apresentacao .thumbs").owlCarousel({
 
            autoPlay: 3000, //Set AutoPlay to 3 seconds
        
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768, 1],
            navigation: false,
            stopOnHover: true,
            pagination: true
        
        });


        $(".product-info .shipping-box label").click(()=>{
            $(".product-info .shipping-box label .fitext").css({"display": "block"});
            $(".product-info .shipping-box .freight-btn").css({"display": "inline-block"});
        })

        
$(".owl-prev").html("<img src='/arquivos/seta-esquerda.png' />");
$(".owl-next").html("<img src='/arquivos/seta-direita.png' />");
    }

    if(skuJson.skus.length  == 1) {
        console.log("KAWABUNGA")
        sku = skuJson.skus[0].sku;
    }

    var batchBuyListener = new Vtex.JSEvents.Listener('batchBuyListener', BatchBuy_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, batchBuyListener);
    $(".product-info .shipping-box .freight-btn").val("CALCULAR");


    $(".go-to-cart-button").click(function(e){
        
        if (sku == 0) {
            e.preventDefault();
        alert("Selecione um SKU");
        }
    })





    let value = $("input.qtd").val();

$(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=false&sc=1`);





$("input.qtd").on("input propertychange",()=>{
    let qty = $("input.qtd").val();
    $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);


})




$("#btn-description").click(()=>{
    $("#description").show();
    $("#specification").hide();
    $("#reviews").hide();
})
$("#btn-specification").click(()=>{
    $("#specification").show();
    $("#description").hide();
    $("#reviews").hide();
})
$("#btn-reviews").click(()=>{
    $("#reviews").show();
    $("#description").hide();
    $("#specification").hide();
})






$(".add-to-cart-button").click((e)=>{
e.preventDefault();
    var url = $(".add-to-cart-button").attr('href');

    $.ajax({
        url:  url,
        type: "GET",
        crossDomain: !0,
        dataType: "html",
        success: function() {
            alert("Produto adicionado ao carrinho!");
        }
    })
})
/*$(".add-to-cart-button").click(()=>{
    let item = {
        quantity: 1,
        seller: '1'
    };
    $(".add-to-cart-button").fadeOut("slow"); 
    vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
        console.log(product, 'getcurrent');
        item.id = product.skus[0].sku;
        console.log(item);
    
        vtexjs.checkout.addToCart([item], null, 1)
            .done(function (orderForm) {
                    $(".added-to-cart").fadeIn()
            });
    });
     
})*/


    
});




/*function BatchBuy_OnSkuDataReceived(e) {
    var id = e.skuData.id;
    selectedToBuy = [];
    if (id > 0) {
        console.log(e.skuData);
    }
}

$(document).ready(function () {
    var batchBuyListener = new Vtex.JSEvents.Listener('batchBuyListener', BatchBuy_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, batchBuyListener);
});*/




