// function loadDoc(url, cFunction) { 
//     var xhttp;
//     xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function() {
//       if (this.readyState == 4 && this.status == 200) {
//         cFunction(this);
//       }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
//   }
//   function myFunction(xhttp){
//       document.getElementById("demo2").innerHTML = xhttp.responseText;
//   }
// $(document).ready(function(){
//     $("#btn").click(function(){
//         $("#demo2").load("https://jsonplaceholder.typicode.com/posts/1", function(responseTxt, statusTxt, xhr){
//             if(statusTxt == "success")
//                 alert("The external content loaded successfully");
//             if(status == "error")
//                 alert("Error: " + xhr.status +": "+ xhr.statusTxt);
//         })
//     });
// });
// function xmlImport(){
// var xhttp, xmlDoc, txt, x, i;
// xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         xmlDoc = this.responseXML;
//         txt = "";
//         x = xmlDoc.getElementsByTagName("author");
//         for(i = 0; i < x.length; i++){
//             txt = txt +x[i].childNodes[0].nodeValue + "<br>"
            
//         }
//     document.getElementById("demo2").innerHTML = txt;
//     }
// };
// xhttp.open("GET", "text.xml", true);
// xhttp.send();
// }
// function headers(){
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("demo3").innerHTML = this.getResponseHeader("Last-Modified");
//         }
//     };
//     xhttp.open("GET", "random.txt", true);
//     xhttp.send();
// }
// 
function showHint(str){
    var xhttp;
    if(str.lenght == 0){
        document.getElementById("txtHint").innerHTML == "";
        return;
        }
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange =function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("textHint").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "res.asp?q="+str, true);
        xhttp.send();
    }
