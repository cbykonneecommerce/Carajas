

setTimeout(function(){
    $("#admake-advanced-filter > .box-filtro h3").append(`<img src="/arquivos/seta-baixo.png" style="max-width: 26px;float: right; margin-top: -8px;"/>`);

   // $("#admake-advanced-filter .opcoes").hide();
    
    $("#admake-advanced-filter > .box-filtro h3").toggle(function() {
        let me = $(this).text().replace(/\s+/g, '-').toLowerCase();
        setTimeout(()=>{
            $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideDown();
        },1000)
        
    }, function() {
        let me = $(this).text().replace(/\s+/g, '-').toLowerCase();
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideUp();
    })
}, 1000)