let text;
switch (new Date().getDay()){
    case 6:
        text = "Saturday";
        break;
    case 0:
        text = "Sunday";
        break;
    default:
        text = "Tôi không biết";
        break;
}
document.getElementById("demo").innerHTML=text;