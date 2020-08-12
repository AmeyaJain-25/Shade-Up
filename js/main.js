function randompickerbtn() {
    var color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
                "#ec7788" , "#1b3945" , "#666666" , "#3e2b3b" ,  "#fffff0",
                "#f0ffff" , "#fff0ff" , "#f26b7f" , "#9cc9ad" , "#f46075" , 
                "#ec7788" , "#c6e2ff" , "#ff6666" , "#a4cafd" , "#d6000d" ,
                "#ff004d" , "#f6b9d8" , "#d4d0cb" , "#ff00ff" , "#6897bb" , 
                "#3e2b3b" , "#e7e3ff" , "#c1e7e1" , "#f4c4b8" , "#ffaf9a" , 
                "#ffaf9a" ,  "#77a1b5" , "#f9e9d2" , "#f3d3a5" , "#fefbdf" , 
                "#c1e7e1" , "#c1e7e1" , "#fee11a" , "#74b741" , "#f0ffff" , 
                "#fff8e7" , "#ff6767" , "#dd99ba" , "#008080" , "#ff004d" , 
                "#fff8e7" , "#f0ffff",];


    let randColor = Math.floor(Math.random() * color.length);
    let colorChange = document.getElementById("randomPicker").style.backgroundColor = color[randColor];

    let valueChange = document.getElementById("randomValuePara").innerHTML = color[randColor]


}














    
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
















function hexFindbtn() {
  var hexInp = document.getElementById("hexInput").value; 
  document.getElementById("color-box").style.backgroundColor = hexInp;
}




function RGBFindbtn() {
  var RInp = document.getElementById("RInput").value;
  var GInp = document.getElementById("GInput").value;
  var BInp = document.getElementById("BInput").value;

  rgbValue = "rgb(" + RInp + "," + GInp + "," + BInp + ")";
  document.getElementById("rgb-color-box").style.backgroundColor = rgbValue;

}

function RangeSelector() {
  var RrInp = document.getElementById("RrInput").value;
  var GrInp = document.getElementById("GrInput").value;
  var BrInp = document.getElementById("BrInput").value;

  rgbValue = "rgb(" + RrInp + "," + GrInp + "," + BrInp + ")";

  document.getElementById("range-color-box").innerText = rgbValue;
  document.getElementById("range-color-box").style.backgroundColor = rgbValue;

  if(RrInp < 50 && GrInp < 50 && BrInp < 50){
    document.getElementById("range-color-box").style.color = "white";
  } else {
    document.getElementById("range-color-box").style.color = "black";
  }

  

}




















// hex to rgb converter

String.prototype.convertToRGB = function(){
  

  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
  ];
  return aRgb;
}


function hexConvbtn() {
  let HEXconvIp = document.getElementById("hexCInp").value;

  if(HEXconvIp.length == 6){
  let HEXconvOp = document.getElementById("hexCOut");

  let tempVal = HEXconvIp.convertToRGB();

  let finalVal = "rgb(" + tempVal + ")";
  HEXconvOp.innerText = finalVal; 
  document.getElementById("hexCInp").style.borderColor = "green";

  
} else {
  document.getElementById("hexCInp").style.borderColor = "red";
  let HEXconvOp = document.getElementById("hexCOut").innerText = "Invalid Input";
}

}



function rgbConvbtn() {
  let RCOnvIp = document.getElementById("RCInput").value;
  let GCOnvIp = document.getElementById("GCInput").value;
  let BCOnvIp = document.getElementById("BCInput").value;

  console.log(RCOnvIp);

  let r = Number(RCOnvIp).toString(16);
  let g = Number(GCOnvIp).toString(16);
  let b = Number(BCOnvIp).toString(16);

  document.getElementById("rgbCOut").innerText = "#" + r + g + b;


}



