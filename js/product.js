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





    let value = $(".qtd-field").val();


$(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);
(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);

$(".btn-mais").click(()=>{
    
    $(".qtd-field").val( value ++)
})
$(".btn-menos").click(()=>{
    if ( $(".qtd-field").val() > 1) {
        $(".qtd-field").val( value --)
    }
    
})


$(".qtd-field").on("input propertychange",()=>{
    let qty = $(".qtd-field").val();
    $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
    $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);


})

$(".btn-menos").click(()=>{
    let qty = $(".qtd-field").val();
    $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
    $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);
})
$(".btn-mais").click(()=>{
    let qty = $(".qtd-field").val();
    $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
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


/*$(".add-to-cart-button").click(()=>{
    vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
        console.log(product, 'getcurrent');
        item.id = product.skus[0].sku;
        console.log(item)
    
        vtexjs.checkout.addToCart([item], null, 1)
            .done(function (orderForm) {
                $(".add-to-cart-button").text("INSERIDO NO CARRINHO!");
                $(".add-to-cart-button").addClass("hvr-sweep-to-right")
            });
    });
})*/
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




