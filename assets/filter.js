$(document).ready(function(){

    $(".sidebar-filters ").on('click',"li",function(){
        console.log('clicked')
        $(".sidebar-filters li").removeClass("filter-remove");
        $(this).addClass("filter-remove");
        $("head").append("<style> .filter-remove::before{content: '\F14A\0020';}</style>");
       
    })
})