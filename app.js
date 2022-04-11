var headerName = document.querySelector("#headerName");
var headerTitle = document.querySelector("#headerTitle");

$(document).ready(function(){ 
    $("#headerName").css('display', 'none');
    $("#headerTitle").css('display', 'none');
    $("#headerName").fadeIn(3000);
    $("#headerTitle").fadeIn(3000);
})