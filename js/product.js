$(document).ready(function() {
    $(".product-info .shipping-box .freight-btn").val("CALCULAR");




    let value = $(".qtd-field").val();

let sku = dataLayer[0].productId;
$(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);


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





