let myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);//tempo que demora a loading page a desaparecer = 5s
}
function showPage() {
    document.querySelector("body").style.display = "block";
    //document.querySelector("body").style.animation="animate 2s";
    document.querySelector(".info").style.animation="fadeIn 2s";
    document.querySelector("video").style.animation="fadeIn2 2s";

}