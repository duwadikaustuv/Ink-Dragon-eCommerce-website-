var images=['image/3D.jpg','image/3d2.jpg','image/3d3.jpg'];
var x=0;
var imgs=document.getElementById("img");
setInterval(slider,2000);

function slider()
{
    if(x<images.length){
        x=x+1;
    }
    else{
        x=1;
    }
    imgs.innerHTML="<img src="+images[x-1]+">";
}
