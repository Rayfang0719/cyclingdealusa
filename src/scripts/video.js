document.addEventListener('DOMContentLoaded',function(){
    var n = 0;
 
    document.getElementsByClassName("up-control")[0].onclick = function(){
           n++;
        console.log("up-control")
        var top = -n*120;
        top = top +"px";
        console.log(top)
         document.getElementsByClassName("videotitle-wrapper")[0].style.top = top;

        
        console.log("test",document.getElementsByClassName("videotitle-wrapper")[0].style);
    }
    
})
