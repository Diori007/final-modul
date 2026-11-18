
var btn1 = document.getElementById("btn_1");
var btn2 = document.getElementById("btn_2");
var btn3 = document.getElementById("btn_3");

var container = document.getElementById("container");

btn1.onclick = function() {
    var circle = document.createElement("div");
    circle.className = "circle";
    container.appendChild(circle);
}

btn2.onclick = function() {
    var triangle = document.createElement("div");
    triangle.className = "triangle";
    container.appendChild(triangle);
}

btn3.onclick = function() {
    var square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
}
