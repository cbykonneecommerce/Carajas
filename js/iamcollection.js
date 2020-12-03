$(document).ready(function () {
    if (window.location.href.includes("?fq=H")) {
        $(".cardorder").hide()
        $(".resultado-busca-filtro .compare").hide()
        $(".resultado-busca-filtro").attr("style", "display: block !important")
    }
})