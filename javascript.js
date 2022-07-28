
// document.writeln("hi this is an html file");
const image_input= document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change",function(){
const reader = new FileReader();
reader.addEventListener("load",()=>{
    uploaded_image=reader.result;

    document.querySelector("#display_image").style.backgroundImage=`url(${uploaded_image})`;
});
    reader.readAsDataURL(this.files[0]);
})


function greetBlue(){
    document.body.style.background ="rgb(205 237 235)";
    document.getElementById("add_img").src="Blue umbrella.png";
    document.getElementById("logo").style.backgroundColor="rgb(31 174 227)";
    
}

function greetPink(){
    document.body.style.background ="rgb(245 216 232)";
    document.getElementById("add_img").src="pink.png";
    document.getElementById("logo").style.backgroundColor="#d62584";
}

function greetYellow(){
    // document.body.style.background = "rgb(249 248 191)";
    document.body.style.background = "#FEFED6";
    // "#ffffed"
   
    document.getElementById("add_img").src="Yello umbrella.png";

    document.getElementById("logo").style.backgroundColor="#fed144";
} 

// Rotate Umbrella


function rotateUm(){
   
    document.getElementById("add_img").src="loader_icon.svg";
}


