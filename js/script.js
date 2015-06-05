function myFunction() {
  var nameValue =   document.getElementById("nameInput").value;
  
  var textSVG = document.getElementById("textSVG");
  var mainSVG = document.getElementById("mainSVG");
  var base = document.getElementById("base");
  
  //var textWidth = textSVG.getAttribute("width")
 // base.setAttribute("width", textWidth);
  
  textSVG.innerHTML = nameValue;
  base.setAttribute("width", textSVG.getComputedTextLength()+50);
  
}