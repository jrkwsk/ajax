'use strict';

document.addEventListener("DOMContentLoaded", function () {

    function pobierzDane() {
        ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
    }

    document.getElementById("guzik").onclick = pobierzDane;



});


//Jsonparse


//http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/
//akademia108.pl
//                          
//
function ajax(method, url) {
    var xhttp = new XMLHttpRequest();
    //console.log(xhttp);

    xhttp.open(method, url);

    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var data = xhttp.responseText;
                console.log(data);

                var obj = JSON.parse(data);

                document.getElementById("odp").innerHTML =
                    "User ID: " + obj.userId + " " + "<br>" + "User name: " + obj.userName + "<br>" +
                    "User URL: " + obj.userURL
            }
            xhttp = null;
        }
    }
    xhttp.send();
}



//
//ajax("GET", "https://jsonplaceholder.typicode.com/posts/1");
//ajax("GET", "https://jsonplaceholder.typicode.com/albums");


//$.getJSON("https://jsonplaceholder.typicode.com/posts/1", function (data) {
//    console.log(data)
//});
//
//// TO SAMO W AJAX
//
//$.ajax({
//    url: "https://jsonplaceholder.typicode.com/posts/1",
//    dataType: "json",
//    success: function (resultJSON) {
//        console.log(resultJSON);
//    }
//});
