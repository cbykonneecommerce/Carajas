/*
 *
 * Desenvolvido por Integrando.se
 * hello@integrando.se
 * 
 * Bootstrap v.3
 *
 */
 
$(document).ready( function(){
	
	if( $.fn.ADMAKEadvancedFilter ){
		$(document).ADMAKEadvancedFilter({
            tipoFiltros     : {},
		});
	}
	if( $.fn.ADMAKEmenu ){
		$(document).ADMAKEmenu();
	}
	$('.col-mini-cart').ADMAKEminiCart({
		miniCartQtd : '.mini-cart-qty-admake',
	});

	var $btnComprar = $('.btn-add-buy-button-asynchronous');
	if( $btnComprar.length ){
		$btnComprar.html('Comprar <i class="fa fa-lock"></i>');
	}

	var $btnComprarProduto = $('.buy-button.buy-button-ref');
	if( $btnComprarProduto.length ){

		if( $('#comprar-flutuante').length ){
			var $comprarFlutuante = $('#comprar-flutuante');
			var btnComprarTop = $('.product-info .buy-button-box').offset().top;
			$(window).scroll( function(){
				if( $(window).width() > 768 ){
					if( $(this).scrollTop() >= btnComprarTop && !$comprarFlutuante.is(':visible') ){
						$comprarFlutuante.fadeIn( function(){
							var urlImage = ( $('#include #image-main').attr('src') != '' ) ? $('#include #image-main').attr('src') : '/arquivos/sem-foto.gif';
							$('#foto-comprar-flutuante').attr('src', urlImage);
							$('body').css('padding-bottom', $comprarFlutuante.height() + 30);
						});
					}else if( $(this).scrollTop() < btnComprarTop && $comprarFlutuante.is(':visible') ){
						$comprarFlutuante.fadeOut( function(){
							$('body').css('padding-bottom', 0);
						});
					}					
				}
			});
		}


		$btnComprarProduto.html('Comprar');

		$btnComprarProduto.click( function(){
			var $this = $(this);
			var url   = $this.attr('href');
			if( url.indexOf('qty=1') > 0 ){
				$this.attr('href', url.replace('qty=1', 'qty='+ parseInt( $('.buy-button-box .box-qtd .qtd').val() ) ) );
			}
		});

		var $recebeQtyForm = $btnComprarProduto.parents('.buy-button-box');
		if( $recebeQtyForm.length ){
			$recebeQtyForm.prepend(
				'<div class="pull-left box-qtd">' +
				'	<div class="bts">' +
				'		<button class="btn btn-menos"><img src="/arquivos/btn-menos.png" alt="" style="width: 35px;"/></button>' +
				' 	</div>' +
				'	<input type="text" class="qtd" value="1" />' +
				'	<div class="bts">' +
				'		<button class="btn btn-mais"><img src="/arquivos/btn-mais.png" alt="" style="width: 35px;"/></button>' +
				' 	</div>' +
				'</div>'
			);
			$(document).on('keypress' , '.buy-button-box .box-qtd .qtd', function(e){
				var tecla = ( window.event ) ? event.keyCode : e.which;   
			    if( ( tecla > 47 && tecla < 58 ) ){
			    	return true;
			    }else{
			    	if ( tecla == 8 || tecla == 0 ){
			    		return true;
			    	}else{
			    		return false;
			    	}
			    }
			});
			$(document).on('keyup' , '.buy-button-box .box-qtd .qtd', function(e){
				$('.buy-button-box .box-qtd .qtd').val( $(this).val() );
			});
			$(document).on('blur' , '.buy-button-box .box-qtd .qtd', function(e){
				var $this = $(this);
				if( $this.val() === '' || parseInt( $this.val() ) < 1 ){
					$('.buy-button-box .box-qtd .qtd').val(1);
				}else{
					$('.buy-button-box .box-qtd .qtd').val( $this.val() );
				}
			});
			$(document).on('click', '.buy-button-box .box-qtd .btn', function(){
				var $this = $(this);
				var $qtd  = $('.buy-button-box .box-qtd .qtd');
				var valor = parseInt( $qtd.val() );
				if( $this.hasClass('btn-mais') ){
					$qtd.val( valor + 1 );
				}else if( $this.hasClass('btn-menos') ){
					if( valor > 1 ){
						$qtd.val( valor - 1 );
					}
				}
			});
		}
	}

	if( $.fn.owlCarousel ){

		var $fullbanner = $(".fullbanner");
		if( $fullbanner.length ){
			$fullbanner.owlCarousel({
			 	items 			: 1,
			    singleItem 		: true,
			    autoPlay 		: 6000,
			    stopOnHover 	: true,
			    navigation 		: true,
			    autoHeight 		: true,
			    navigationText 	: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			});
		}

		var $showCaseOwl = $(".showcase-owl .prateleira > ul");
		if( $showCaseOwl.length ){
			$showCaseOwl.find('.helperComplement').remove();
			$showCaseOwl.owlCarousel({
			 	items 				: 5,
			    autoPlay 			: true,
			    stopOnHover 		: true,
			    pagination 	 		: false,
			    itemsDesktop 		: [1199,5],
			    itemsDesktopSmall 	: [980,5],
			    itemsTablet 		: [768,3],
			    itemsMobile 		: [479,2],
			    navigation 			: true,
			    navigationText 		: ['<button class="btn btn-default btn-lg"><i class="fa fa-chevron-left"></i></button>','<button class="btn btn-default btn-lg"><i class="fa fa-chevron-right"></i></button>'],
			});
		}
	}
});

$(document).click(function(e) {
    var target = e.target;
    $('.dropdown-menu').each(function() {
        var $this = $(this);
        var dropdown = $this.prev('.btn-dropdown');
        if (dropdown[0] == target) $(this).toggle();
        else $(this).hide();
    });
});