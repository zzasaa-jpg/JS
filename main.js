let light = document.querySelector(".blub");
let btn = document.querySelector(".light");
let indicater = document.querySelector("ion-icon");
let btn1 = document.querySelector(".charge-indicater");
let mobile_btn = document.querySelector(".btn");
let btn2 = document.querySelector(".tv-indicater");
let tv_indicater = document.querySelector(".tv ion-icon");
let tv_btn = document.querySelector(".tv-btn");
let light_btn_border = document.querySelector(".light-border");
let charge_indicater_border = document.querySelector(".charge-indicater-border");
let tv_indicater_border = document.querySelector(".tv-indicater-border");

let isOn = false;

btn.addEventListener("click", function() {
    if(!isOn){
        light.style.backgroundColor = "yellow";
        light.style.boxShadow = "0 0 10px green";
        light_btn_border.style.backgroundColor = "#00ff51";
        light_btn_border.innerHTML = '<ion-icon name="power-outline"></ion-icon>';
        light_btn_border.style.color = "white";
        light_btn_border.style.fontSize = "40px";
        light_btn_border.style.display = "flex";
        light_btn_border.style.alignItems = "center";
        isOn = true;
    } else{
        light.style.backgroundColor = "";
        light.style.boxShadow = "";
        light_btn_border.style.backgroundColor = "";
        light_btn_border.innerHTML = "";
        isOn = false;
    }
})

let isChargeing = false;

btn1.addEventListener('click', function(){
    if(!isChargeing){
        indicater.style.color = "yellow";
        indicater.style.backgroundColor = "black";
        indicater.style.borderRadius = "50px";
        indicater.style.display = "block"
        mobile_btn.style.marginTop = "70.5px";
        charge_indicater_border.style.backgroundColor = "#00ff51";
        charge_indicater_border.innerHTML = '<ion-icon name="power-outline"></ion-icon>';
        charge_indicater_border.style.color = "white";
        charge_indicater_border.style.fontSize = "40px";
        charge_indicater_border.style.display = "flex";
        charge_indicater_border.style.alignItems = "center";
        isChargeing = true;
    } else{
        indicater.style.backgroundColor = "";
        indicater.style.color = "";
        indicater.style.display = "none"
        mobile_btn.style.marginTop = "86.5px";
        charge_indicater_border.innerHTML = "";
        charge_indicater_border.style.backgroundColor = "";
        isChargeing = false;
    }
})

let isTvOn = false;

btn2.addEventListener('click', function(){
    if(!isTvOn){
        tv_indicater.style.display = "block";
        tv_btn.style.marginTop = "6.5px";
        tv_indicater.style.fontSize = "80px";
        tv_indicater_border.style.backgroundColor = "#00ff51";
        tv_indicater_border.innerHTML = '<ion-icon name="power-outline"></ion-icon>';
        tv_indicater_border.style.color = "white";
        tv_indicater_border.style.fontSize = "40px";
        tv_indicater_border.style.display = "flex";
        tv_indicater_border.style.alignItems = "center";
        isTvOn = true;
    } else{
        tv_indicater.style.display = "none";
        tv_btn.style.marginTop = "86.5px";
        tv_indicater_border.style.backgroundColor = "";
        tv_indicater_border.innerHTML = "";
        isTvOn = false;
    }
})