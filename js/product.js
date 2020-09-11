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



$("#description").show();
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

            refreshCart();
        }
    })
})




//TRANSFORM SPECS

let specs = $(".value-field.Especificacoes").text().split("\\");
$("#caracteristicas").remove();
$("#specification").html(`<table cellspacing="0" class="group Especificacoes">

</table>`)

let formatedSpecs = specs.map((element)=>{
    let specname = element.split(":")[0];
    let valuename = element.split(":")[1];

    return `<tr style="height: 50px;">
    <td style="font-weight:bold;font-size: 20px;width: 50%;">${specname}</td>
    <td style="font-size: 20px;width: 50%;">${valuename}</td>
    </tr>`
});

$("#specification table").html(formatedSpecs);
$($("#specification table tr")[$("#specification table tr").length - 1]).remove()




    
});

//CALCULADORA

setTimeout(()=>{
    let ispiso = false;
    let metragem = 0
    
    for(let i = 0; i < $(".Especificacoes td").length; i++ ) {
        if($($(".Especificacoes td")[i]).text() == " CX" || $($(".Especificacoes td")[i]).text() == "CX") {
            ispiso = true;
            metragem = $($(".Especificacoes td")[i + 1]).text().split("M²")[0].replace(/,/g, '.');
            metragem = parseFloat(metragem);
        }
    }
    
    if(ispiso) {
        $(".buy-button-box").prepend(`<span id="metragemPiso">Você está comprando: ${metragem} M² (1 caixa)</span>`);
        let price = skuJson.skus[0].bestPriceFormated;
        price = price.replace(/,/g, '.').replace(/[\sR$]+/g, '');
        price = Number(price);

        $(".btn-menos").click(()=>{
            let qty = Number($('.buy-button-box .box-qtd .qtd').val());
            
            qty <= 1 ? qty = 1: qty = qty - 1;

           
            console.log(qty)
            let metragemOriginal = metragem;
            metragemOriginal = metragem * qty;
            let totalPrice = metragemOriginal.toFixed(2) * price
            $("#metragemPiso").html(`Você está comprando: ${metragemOriginal.toFixed(2)} M² <br/><br/>
            Caixas: ${qty} no total de: <span style="color: #278950;font-weight: 400;">R$ ${totalPrice.toFixed(2)} </span>`);
          })
        $(".btn-mais").click(()=>{
            let qty = Number($('.buy-button-box .box-qtd .qtd').val());
            qty = qty + 1
            
            console.log(qty)
            let metragemOriginal = metragem;
            metragemOriginal = metragem * qty;
            let totalPrice = metragemOriginal.toFixed(2) * price
            $("#metragemPiso").html(`Você está comprando: ${metragemOriginal.toFixed(2)} M² <br/><br/>
            Caixas: ${qty} no total de: <span style="color: #278950;font-weight: 400;">R$ ${totalPrice.toFixed(2)} </span>`);
    
        })
    }
    
},1000)


setInterval(()=>{
let original = $(".freight-values table tbody tr:first-of-type td:nth-of-type(2)").text();
let newtext = original.replace("Frete Retira (1_2)", "Retirada em loja");
$(".freight-values table tbody tr:first-of-type td:nth-of-type(2)").text(newtext)
},1000)


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




