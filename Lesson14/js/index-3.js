const time = new Date().getHours();
let gretting;
if (time<10){
    gretting = "GoodMorning";
}else if(time<20){
    gretting = "GoodDay";
}else{
    gretting = "GoodEvenning";
}
document.getElementById("demo").innerHTML=gretting;