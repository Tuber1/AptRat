function startInteraction(){
    document.getElementById("woop").style.display = "none";
    rat1();
    setTimeout(rat2,500);
    setTimeout(rat3,1000);
    setTimeout(rat4,1500);
}

function rat1() {
    var ratBt1 = document.getElementById("ratbt1");
    min1 = Math.ceil(-5);
    max1 = Math.floor(85);
    var ratBt1X = Math.floor(Math.random()*(max1-min1) + min1);
    var ratBt1Y = Math.floor(Math.random()*(max1-min1) + min1);
    ratBt1.style.left = ratBt1X + "vw";
    ratBt1.style.top = ratBt1Y + "vh";
    ratBt1.style.display = "block";
    var ratSound1 = document.getElementById("ratsound1");
    ratSound1.play();
}

function rat2() {
    var ratBt2 = document.getElementById("ratbt2");
    min2 = Math.ceil(-5);
    max2 = Math.floor(85);
    var ratBt2X = Math.floor(Math.random()*(max2-min2) + min2);
    var ratBt2Y = Math.floor(Math.random()*(max2-min2) + min2);
    ratBt2.style.left = ratBt2X + "vw";
    ratBt2.style.top = ratBt2Y + "vh";
    ratBt2.style.display = "block";
    var ratSound2 = document.getElementById("ratsound2");
    ratSound2.play();
}

function rat3() {
    var ratBt3 = document.getElementById("ratbt3");
    min3 = Math.ceil(-5);
    max3 = Math.floor(85);
    var ratBt3X = Math.floor(Math.random()*(max3-min3) + min3);
    var ratBt3Y = Math.floor(Math.random()*(max3-min3) + min3);
    ratBt3.style.left = ratBt3X + "vw";
    ratBt3.style.top = ratBt3Y + "vh";
    ratBt3.style.display = "block";
    var ratSound3 = document.getElementById("ratsound3");
    ratSound3.play();
}

function rat4() {
    var ratBt4 = document.getElementById("ratbt4");
    min4 = Math.ceil(-5);
    max4 = Math.floor(85);
    var ratBt4X = Math.floor(Math.random()*(max4-min4) + min4);
    var ratBt4Y = Math.floor(Math.random()*(max4-min4) + min4);
    ratBt4.style.left = ratBt4X + "vw";
    ratBt4.style.top = ratBt4Y + "vh";
    ratBt4.style.display = "block";
    var ratSound4 = document.getElementById("ratsound4");
    ratSound4.play();
}

function killrat1(){
    document.getElementById("ratbt1").style.display = "none";
    var ratSound1 = document.getElementById("ratsound1");
    ratSound1.pause();
    ratGen1();
}

function killrat2(){
    document.getElementById("ratbt2").style.display = "none";
    var ratSound2 = document.getElementById("ratsound2");
    ratSound2.pause();
    ratGen2();
}

function killrat3(){
    document.getElementById("ratbt3").style.display = "none";
    var ratSound3 = document.getElementById("ratsound3");
    ratSound3.pause();
    ratGen3();
}

function killrat4(){
    document.getElementById("ratbt4").style.display = "none";
    var ratSound4 = document.getElementById("ratsound3");
    ratSound4.pause();
    ratGen4();
}

function ratGen1() {
    gen1Min = Math.ceil(1000);
    gen1Max = Math.floor(15000);
    var rnd1 = Math.floor(Math.random()*(gen1Max-gen1Min) + gen1Min);
    setTimeout(rat1,rnd1);
}

function ratGen2() {
    gen2Min = Math.ceil(1000);
    gen2Max = Math.floor(15000);
    var rnd2 = Math.floor(Math.random()*(gen2Max-gen2Min) + gen2Min);
    setTimeout(rat2,rnd2);
}

function ratGen3() {
    gen3Min = Math.ceil(1000);
    gen3Max = Math.floor(15000);
    var rnd3 = Math.floor(Math.random()*(gen3Max-gen3Min) + gen3Min);
    setTimeout(rat3,rnd3);    
}

function ratGen4() {
    gen4Min = Math.ceil(1000);
    gen4Max = Math.floor(15000);
    var rnd4 = Math.floor(Math.random()*(gen4Max-gen4Min) + gen4Min);
    setTimeout(rat4,rnd4);    
}