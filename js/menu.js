








$(".dropdown-container").hide();


$(".dropdown-btn#institucional").toggle(() => {
    $(".dropdown-container#suporte").hide();
    $(".dropdown-btn#institucional i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#institucional").slideDown()
}, () => {
    $(".dropdown-container#institucional").hide()
    $(".dropdown-btn#institucional i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#suporte").toggle(() => {
    $(".dropdown-container#institucional").hide();
    $(".dropdown-btn#suporte i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#suporte").slideDown()
}, () => {
    $(".dropdown-container#suporte").hide()
    $(".dropdown-btn#suporte i").attr('class', 'fa fa-angle-down');
})