

function start() {
    var gnaw = document.getElementById("gnaw");
    document.getElementById("start").style.display = "none";
    gnaw.play();
}

function badbutton1() {
    var badbutton1 = document.getElementById('badbutton1');
    badbutton1.play();   
}

function badbutton2() {
    var badbutton2 = document.getElementById('badbutton2');
    badbutton2.play();
}

function action1() {
    var walk = document.getElementById("walk");
    walk.play();
    var action1 = document.getElementById("action1");
    action1.style.display = "none";
    setTimeout(function(){document.getElementById("action2").style.display = "block"},2500);
}

function action2() {
    var lightswitch = document.getElementById("switch");
    lightswitch.play();
    var action2 = document.getElementById("action2");
    var action3 = document.getElementById("action3");
    action2.style.display = "none";
    document.getElementById("lightbg1").style.display = "none";
    document.getElementById("light1").style.display = "none";
    document.getElementById("light2").style.display = "none";
    document.getElementById("shadow1").style.display = "none";
    document.getElementById("shadow2").style.display = "none";
    document.getElementById("shadow3").style.display = "none";
    document.getElementById("shadow4").style.display = "none";
    action3.style.display = "block";
    document.getElementById("light3").style.display = "block";
    
    document.getElementById("bb1").style.opacity = "0.5";
    document.getElementById("bb2").style.opacity = "0.5";
    document.getElementById("bb3").style.opacity = "0.5";
}

function action3() {
    var dooropen = document.getElementById("dooropen");
    dooropen.play();
    setTimeout(outsideStart,5500);
    document.getElementById("action3").style.display = "none";
}

function outsideStart(){
    var sirens = document.getElementById("outsidesiren");
    var subtlerustle = document.getElementById("subtlerustle");
    sirens.play();
    subtlerustle.play();
    gnaw.pause();
    document.getElementById("action4").style.display = "block";
    document.getElementById("light4").style.display = "block"
}

function action4() {
    var doorclose = document.getElementById("doorclose");
    doorclose.play();
    document.getElementById("action4").style.display = "none";
    setTimeout(function(){document.getElementById("action5").style.display = "block"},10000);
}

function action5() {
    var stomp = document.getElementById("stomp");
    stomp.play();
    setTimeout(stompScurry,1000);
}

function stompScurry() {
    var scurry = document.getElementById("stompscurry");
    scurry.play();
    subtlerustle.pause();
    document.getElementById("action5").style.display = "none";
    setTimeout(firstStepInitial,15000);
}

function firstStepInitial() {
    document.getElementById("stepone").style.display = "block";
}

function stepOne() {
    var stepone = document.getElementById("step1");
    stepone.play();
    document.getElementById("stepone").style.display = "none";
    document.getElementById("steptwo").style.display = "block";
    document.getElementById("light4").style.opacity = "0.8";
}

function stepTwo() {
    var steptwo = document.getElementById("step2");
    steptwo.play();
    document.getElementById("steptwo").style.display = "none";
    document.getElementById("stepthree").style.display = "block";
    document.getElementById("light4").style.opacity = "0.6";
}

function stepThree() {
    var stepthree = document.getElementById("step3");
    stepthree.play();
    document.getElementById("stepthree").style.display = "none";
    document.getElementById("stepfour").style.display = "block";
    document.getElementById("light4").style.opacity = "0.4";
}

function stepFour() {
    var stepfour = document.getElementById("step4");
    stepfour.play();
    document.getElementById("stepfour").style.display = "none";
    document.getElementById("stepfive").style.display = "block";
    document.getElementById("light4").style.opacity = "0.2";
}

function stepFive() {
    var stepfive = document.getElementById("step5");
    stepfive.play();
    document.getElementById("stepfive").style.display = "none";
    document.getElementById("light4").style.opacity = "0";
    document.getElementById("action6").style.display = "block";
}

function action6() {
    var fence = document.getElementById("fence");
    fence.play();
    document.getElementById("action6").style.display = "none";
    setTimeout(function(){document.getElementById("action7").style.display = "block"},15000);
}

function action7() {
    var finalwalk = document.getElementById("finalwalk");
    finalwalk.play();
    document.getElementById("action7").style.display = "none";
    setTimeout(endFade,14000);
}

function endFade() {
    var endScreen = document.getElementById("end");
    endScreen.style.display = "flex";
    endScreen.style.transition = "opacity 5s";
    endScreen.style.opacity = "1";
    document.getElementById("bb1").style.display = "none";
    document.getElementById("bb2").style.display = "none";
    document.getElementById("bb3").style.display = "none";
    document.getElementById("light3").style.display = "none";
    var sirens = document.getElementById("outsidesiren");
    sirens.pause();
}

function end1(){
    document.getElementById("end1").style.display = "none";
    document.getElementById("end2").style.display = "flex";
    document.getElementById("end2").style["flex-direction"] = "column";
}