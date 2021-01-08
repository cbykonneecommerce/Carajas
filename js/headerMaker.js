$(document).ready(function () {


    fetch("/api/catalog_system/pub/category/tree/4/")
        .then(res => res.json())
        .then(response => {
            console.log(response);



            response.forEach(element => {
                let divtext = element.name;
                element.name = element.name.replace(/[\s/,&]+/g, '-');
                console.log(divtext,  element.name.replace(/[\s/,&]+/g, '-'))
                //desk
                $(".deptos ul").append(`<li class="depto-${element.name}"><a href="${element.url}">${divtext}</a></li>`);
               // console.log("adding main");
               
                if (element.hasChildren) {
                    $("#top-menu .container #deptos-list").append(`<div class="deptonav depto-${element.name}" id="${element.name}" style="display: none">

            <div class="row">
            
                 <div class="col-sm-4 firstLayer firstLayer-${element.name}">
                     <ul class="">
                      </ul>
                 </div>
                 </div>
            </div>`);



             //mobile
             $(".sidenav").append(`<div style="display:block;"><span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span><button class="dropdown-btn" id="${element.name}"><i class="fa fa-angle-down"></i></button></div>
             <div class="dropdown-container" id="${element.name}"></div>`);
             

                    //Desktop
                    $(`.depto-${element.name}`).mouseenter(function () {
                        $(".deptonav").hide();
                        $(`#deptos-list .depto-${element.name}#${element.name}`).show()
                    });

                    $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function () {
                        $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
                        $(`#deptos-list .deptonav .row .secondLayer`).hide();
                       
                    });


                    //Mobile
           $(`.dropdown-btn#${element.name}`).toggle(() => {
           // $(".dropdown-container").slideUp();
            $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
            $(`.dropdown-container#${element.name}`).slideDown()
        }, () => {
            $(`.dropdown-container#${element.name}`).slideUp()
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
        })

                    element.children.forEach((subs, index) => {
                      //  console.log("adding children");
                      //  console.log(subs)
                        let divtextsub = subs.name;
                        subs.name = subs.name.replace(/[\s/,&]+/g, '-');
                        //desktop
                        $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul`).append(`<li  class="item-${subs.name}"><a href="${subs.url}">${divtextsub}</a><i class="fa fa-angle-right"></i></li>`);
                       
                       if(!subs.hasChildren) {
                        $(`.dropdown-container#${element.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${element.name}"><a href="${subs.url}">${divtextsub}</a></span></div>`);

                       }
                       

                        if (subs.hasChildren) {
                            $(`.depto-${element.name} .row`).append(`
                        <div class="col-sm-4 secondLayer secondLayer-${subs.name} parent-${element.name}" style="display:none">
                     <ul class="">
                         
                     </ul>
                 </div>
                        `);
                        
                        $(`.depto-${element.name} .row`).append(`
                        <div class="col-sm-4 thirdlayer parent-${element.name}">
                            <img class="banner-cat-${element.name} " src="/arquivos/banner-cat-${element.name}.jpg"/>
                 </div>
                        `);
                        
                        //Mobile
                        $(`.dropdown-container#${element.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${subs.name}"><a href="${subs.url}">${divtextsub}</a></span>
                        <button class="dropdown-btn" id="${subs.name}"><i class="fa fa-angle-down"></i></button></div>
                        <div class="dropdown-container" id="${subs.name}"></div>`);








                            //Desktop
                            $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul .item-${subs.name}`).mouseenter(function () {
                                $(`.depto-${element.name} .row .col-sm-8.secondLayer`).hide()
                                $(`.depto-${element.name} .row .col-sm-8.secondLayer-${subs.name}`).show()
                            });

                          
                            
                                //Mobile
                                console.log("inserindo listeners sub long " + subs.name )
                                $(`.dropdown-btn#${subs.name}`).toggle(() => {
                                 console.log(`.dropdown-btn#${subs.name}`)
                                 $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                                 $(`.dropdown-btn#${subs.name} i`).attr('class', 'fa fa-angle-up');
                                 $(`.dropdown-container#${subs.name}`).slideDown()
                             }, () => {
                                 $(`.dropdown-container#${subs.name}`).slideUp()
                                 $(`.dropdown-btn#${subs.name} i`).attr('class', 'fa fa-angle-down');
                             })
                     

                           
                                     

                            subs.children.forEach((grandsubs) => {
                              //  console.log("adding grandchildren");
                               // console.log(grandsubs)
                                let divtextgrandsubs = grandsubs.name;
                                grandsubs.name = grandsubs.name.replace(/[\s/,&]+/g, '-');
                                $(`.depto-${element.name} .row .col-sm-8.secondLayer-${subs.name}  ul`).append(`<li  class="item-${grandsubs.name}"><a href="${grandsubs.url}"></i>${divtextgrandsubs}</a><i class="fa fa-angle-right"></li>`);

                                //mobile
                                if(!grandsubs.hasChildren) {
                                    $(`.dropdown-container#${subs.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${grandsubs.name}"><a href="${grandsubs.url}">${divtextgrandsubs}</a></span></div>`);
                                   
                                   } 
                                    
                                   
                              

                               

                            })
                        }




                        //mobile
                       

                    })

                        //Desktop

                   









                } else {
                    $(".sidenav").append(`<span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span>`)
                }
            });








        })


    $(".vtexIdUI .modal-header .close").click(function () {
        window.location.href = '/';
    })

    //MUDAR TAMANHO DAS IMAGENS NA BARRA DE BUSCA
    


   
    
      
     
     refreshCart();






     $("#desktop-cart").hover(()=>{$(".deptonav").hide()})

     setInterval(() => {
        $(".vtexIdUI-close", "body").click(()=>{window.location.replace("/")})
     }, 1000);

    

     $(".depto-nav-area").mouseleave(()=>{$(".deptonav").hide()})
});




setInterval(()=>{
    $(".bread-crumb ul li a").css({"text-transform":"capitalize"})
    
    const imgsLength = $(".ui-autocomplete .ui-menu-item").length;

    for(let i= 0; i < imgsLength; i++) {
        if($($(".ui-autocomplete .ui-menu-item img")[i]).attr("src")){
            let imgProduct = $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src");
            imgProduct = imgProduct.replace(/-25-25/g, '-50-50');
            $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src",imgProduct);
        }
        
    }
},1000)