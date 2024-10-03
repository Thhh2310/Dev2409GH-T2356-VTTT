$(document).ready(function(){
    $("#HTML").click(function(){
        $("#HTML").css("background-color","red");
        $("#content").text("Html viết tắt HyperText Harkup Language");
        $("#PHP,#Css,#Jquery").css("background-color","#ccc");
    })
    $("#Css").click(function(){
        $("#Css").css("background-color","green");
        $("#content").text("Html viết tắt HyperText Harkup Language");
        $("#PHP,#HTML,#Jquery").css("background-color","#ccc");
    })
    $("#Jquery").click(function(){
        $("#Jquery").css("background-color","blue");
        $("#content").text("Html viết tắt HyperText Harkup Language");
        $("#PHP,#Css,#HTML").css("background-color","#ccc");
    })
    $("#PHP").click(function(){
        $("#PHP").css("background-color","aqua");
        $("#content").text("Html viết tắt HyperText Harkup Language");
        $("#HTML,#Css,#Jquery").css("background-color","#ccc");
    })
})