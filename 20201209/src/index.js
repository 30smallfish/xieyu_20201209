import index from "./index.css";
import index_less from "./index.less";
import index_scss from "./index.scss";
import imgs from "./菠萝头.jpg";

var boxImg = document.querySelector(".box_img");

boxImg.style.backgroundImage="url("+imgs+")";
boxImg.style.backgroundSize="cover"

// var myImg = document.createElement("img");
// myImg.src=imgs;
// boxImg.appendChild(myImg);
// import jp2
var arr = [10,20,30,40,50];
arr.forEach( ( item , index )=>{
    console.log(item,index);
})