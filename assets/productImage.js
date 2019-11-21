$(document).ready(function(){

    $(".thumbnail-image").on('hover','a',function(){
        $(".thumbnail-image a").css("border","none");
        $(this).css("border","1px solid #F6B800");
        var imgsrc =this.style.backgroundImage;
      setBgImage(document.getElementsByClassName('main-image')[0],imgsrc);
    }) 

  function setBgImage(ele,imgsrc){
    console.log(ele,imgsrc)
    ele.style.backgroundImage = imgsrc;
    

  }    
    	

    // $(".main-image").on('mouseenter',function(){
    //     $(".detail").css("display","block");
    //     $(".product-single__info").css("display","none")
    // })
    // $(".main-image").on('mouseleave',function(){
    //     $(".detail").css("display","none");
    //     $(".product-single__info").css("display","block");
    // })
    var demoTrigger = $(".main-image")[0];
    var paneContainer = $(".detail")[0];

    // new Drift(demoTrigger, {
    //   paneContainer: paneContainer,
    //   inlinePane: false
    // });


})