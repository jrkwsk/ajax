'use strict';


document.addEventListener("DOMContentLoaded", function () {

    window.onscroll = function () {
        myFunction()
    };

    function myFunction() {

        var htmlOffsetHeight = document.documentElement.offsetHeight; //wysokosc dokumentu
        var windowInnerHeight = window.innerHeight; //wysokosc okna
        var scrollTop = document.documentElement.scrollTop;


        //        console.log("ScrollTop: " + scrollTop);
        //        console.log("htmlOffsetHeight: " + htmlOffsetHeight);
        //        console.log("windowInnerHeight: " + windowInnerHeight);

        if (htmlOffsetHeight == windowInnerHeight + scrollTop) {

            console.log("dotarles do konca strony");
            ajax("GET", "https://jsonplaceholder.typicode.com/users");


        };
    };
});


// var tablica = resultJSON;


//
//                    tablica.forEach(function (element, index) {
//
//                        console.log(tablica[index].name + "</br>");



//to wkleilas
function ajax(method, url) {
    var xhttp = new XMLHttpRequest();
    //    console.log(xhttp);

    xhttp.open(method, url);

    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {

                var data = xhttp.responseText;
                var dataJSON = JSON.parse(data);
                console.log(dataJSON);


                dataJSON.forEach(function (element, index) {

                    //                    console.log(element.name);

                    var par = document.createElement("p");
                    var text = document.createTextNode(element.name);

                    console.log(par);

                    par.appendChild(text);
                    document.body.appendChild(par);

                });

                //                var par = document.createElement("p");
                //                var text = document.createTextNode("-------<br>");
                //
                //                document.body.appendChild(par);
                //                par.appendChild(text);
            }
            xhttp = null;
        }
    }
    xhttp.send();
}
//koniec wklejania


//funkcja do wybierania i wyswietlania name






//                        $.ajax({
//                            url: "https://jsonplaceholder.typicode.com/users",
//                            dataType: "json",
//
//                            success: function (resultJSON) {
//                                console.log(resultJSON);
//
//                                var tablica = resultJSON;
//                            }
//
//
//                            tablica.forEach(function (element, index) {
//
//                                console.log(tablica[index].name + "</br>")
//                            };







//kod do scrollowania znaleziony na ww
//$('a[href^="#"]').on('click', function(event) {
//	
//		var target = $( $(this).attr('href') );
//	
//		if( target.length ) {
//			event.preventDefault();
//			$('html, body').animate({
//				scrollTop: target.offset().top
//			}, 1000);
//		}
//	});
// 
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


//TO DZIAŁA
//'use strict';
//var y = $(document).innerHeight(); //wysokosc dokumentu
//var v = $(window).innerHeight(); //wysokosc okna
//
//$(document).ready(function () {
//
//        $(window).scroll(function () {
//
//                var z = $(document).scrollTop();
//
//                if (y == v + z) {
//                console.log("dotarles do konca strony");
//                };
//       });    
//});