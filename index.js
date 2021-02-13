$(document).ready(function(){
    $('.menu-btn').click(function(){
        
        $('.menu').toggleClass('menuActive')
        $('.menu-btn').toggleClass('menu-btn-Close')
    });
    $('.navMenu').click(function(){
        $('.menu').toggleClass('menuActive')
        $('.menu-btn').toggleClass('menu-btn-Close')
        
    });
  
    var t=0
    $(window).scroll(function(){
        if(this.scrollY>40){
            $('.menu-btn').addClass('menu-btn-up')
        }
        else{
            $('.menu-btn').removeClass('menu-btn-up')
        }
    })
    $('#cSubmit').click(function(){
        var cName=$('#cName').val();
        var cEmail=$('#Email').val();
        var cTextarea=$('#cTextarea').val();
        console.log(cName,cEmail,cTextarea);
    })
});

