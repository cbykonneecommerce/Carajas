function formatReal( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}


function refreshCart() {

    setTimeout(()=>{
        $("#mini-cart-admake .mini-cart-item").remove();
        vtexjs.checkout.getOrderForm()
        .then(function(orderForm) {
    
    
            orderForm.items.forEach((item, position)=>{
                $("#mini-cart-admake .mini-cart-itens").append(`
       
                <div class="mini-cart-item item-${position}">
                <span class="imagem">
            
                    <a class="sku-imagem" href="${item.detailUrl}">
                        <img height="71" width="71" alt="${item.name}" src="${item.imageUrl}">
                    </a> </span>
                <span class="detalhes">
                    <p class="nome-produto">
                        <a href="${item.detailUrl}">${item.name}</a>
                    </p>
                    <span class="qtd-valor">
                        <span class="qtd">${item.quantity}x</span>
                        <span class="preco">${item.formattedPrice}</span> 
                    </span>
            
            </div>
                `);
            })
          
        
          
            $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
            $(".header .mini-cart span.badge").text(orderForm.items.length)
        });
     
    },1000)
}

