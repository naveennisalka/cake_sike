function openNav() {
    document.getElementById("sidebar").style.right = "0px";
    document.getElementById("backdrop").style.visibility = "visible";
}

function clznav() {
    document.getElementById("sidebar").style.right = "-320px";
    document.getElementById("backdrop").style.visibility = "hidden";
}

var cnt0 = 0;
var cnt1 = 0;
var cnt2 = 0;
var cnt3 = 0;
var cnt4 = 0;

var totle = 0;


function order() {
    alert("Thank You for Your  Order ...! ")
    document.getElementById("input0").innerHTML = 0;
    document.getElementById("input1").innerHTML = 0;
    document.getElementById("input2").innerHTML = 0;
    document.getElementById("input3").innerHTML = 0;
    document.getElementById("input4").innerHTML = 0;
    document.getElementById("totlec").innerHTML = 0;

}

function add0() {
    cnt0 += 1;
    totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
    document.getElementById("input0").innerHTML = cnt0;
    document.getElementById("totlec").innerHTML = totle;
    
}

function minus0(t) {
    if (cnt0 != 0) {
        cnt0 -= 1;
        totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
        document.getElementById("input0").innerHTML = cnt0;
        document.getElementById("totlec").innerHTML = totle;
    }
}

function add1() {
    cnt1 += 1;
    totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
    document.getElementById("input1").innerHTML = cnt1;
    document.getElementById("totlec").innerHTML = totle;
}

function minus1(t) {
    if (cnt1 != 0) {
        cnt1 -= 1;
        totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
        document.getElementById("input1").innerHTML = cnt1;
        document.getElementById("totlec").innerHTML = totle;
    }
}

function add2() {
    cnt2 += 1;
    totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
    document.getElementById("input2").innerHTML = cnt2;
    document.getElementById("totlec").innerHTML = totle;
}

function minus2(t) {
    if (cnt2 != 0) {
        cnt2 -= 1;
        totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
        document.getElementById("input2").innerHTML = cnt2;
        document.getElementById("totlec").innerHTML = totle;
    }
}

function add3() {
    cnt3 += 1;
    totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
    document.getElementById("input3").innerHTML = cnt3;
    document.getElementById("totlec").innerHTML = totle;
}

function minus3(t) {
    if (cnt3 != 0) {
        cnt3 -= 1;
        totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
        document.getElementById("input3").innerHTML = cnt3;
        document.getElementById("totlec").innerHTML = totle;
    }
}

function add4() {
    cnt4 += 1;
    totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
    document.getElementById("input4").innerHTML = cnt4;
    document.getElementById("totlec").innerHTML = totle;
}

function minus4(t) {
    if (cnt4 != 0) {
        cnt4 -= 1;
        totle = cnt0*3+cnt1*4+cnt2*6+cnt3*5+cnt4*4;
        document.getElementById("input4").innerHTML = cnt4;
        document.getElementById("totlec").innerHTML = totle;

    }
}



