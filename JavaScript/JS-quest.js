$(document).ready(function(){
    
    var D1=false;
    $(Q1).click(function(){
        if(D1==0){
            $(A1).fadeIn();
            D1=true;
        }
        else{
            $(A1).fadeOut();
            D1=false;
        }
    })
    var D2=false;
    $(Q2).click(function(){
        if(D2==0){
            $(A2).fadeIn();
            D2=true;
        }
        else{
            $(A2).fadeOut();
            D2=false;
        }
    })
    var D3=false;
    $(Q3).click(function(){
        if(D3==0){
            $(A3).fadeIn();
            D3=true;
        }
        else{
            $(A3).fadeOut();
            D3=false;
        }
    })
    var D4=false;
    $(Q4).click(function(){
        if(D4==0){
            $(A4).fadeIn();
            D4=true;
        }
        else{
            $(A4).fadeOut();
            D4=false;
        }
    })
    var D5=false;
    $(Q5).click(function(){
        if(D5==0){
            $(A5).fadeIn();
            D5=true;
        }
        else{
            $(A5).fadeOut();
            D5=false;
        }
    })
    $(quest).mouseenter(function(){
        $(hint).fadeIn();
    });
    $(quest).mouseleave(function(){
        $(hint).fadeOut();
    });
})