'use strict';

$(document).ready(function () {

    $(window).scroll(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: "json",
            success: function (resultJSON) {
                console.log(resultJSON);

                var tablica = resultJSON;

                tablica.forEach(function (element, index) {

                    console.log(tablica[index].name + "</br>");




                });


                //                                    
            }

        });
    });
});
//
//$(document).ready(function(){
//    $("#guzik2").click(function(){
//        $("p:first").insertAfter("p:last");
//    });
//});



//function ajax(method, url) {
//    var xhttp = new XMLHttpRequest();
//    //console.log(xhttp);
//
//    xhttp.open(method, url);
//
//    xhttp.onreadystatechange = function() {
//
//        if (xhttp.readyState == 4) {
//            if (xhttp.status == 200) {
//                var data = xhttp.responseText;
//                console.log(data);
//
//                var obj = JSON.parse(data);
//
//                $("#odp").html("User ID: " + obj.userId + " " + "<br>" + "User name: " + obj.userName + "<br>" +
//                    "User URL: " + obj.userURL);
//
//            }
//            xhttp = null;
//        }
//    }
//    xhttp.send();
//}

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