$(document).ready(function(){
    var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    //     B R Y B G G Y N R N Y B G R N
    //     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4
    var images=[im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15];
    var bins=[blue_m, green_m, yellow_m, red_m, brown_m];

    $(im1).click(function(){
        func(im1,0);
    });
    $(im2).click(function(){
        func(im2,1);
    });
    $(im3).click(function(){
        func(im3,2);
    });
    $(im4).click(function(){
        func(im4,3);
    });
    $(im5).click(function(){
        func(im5,4);
    });

    $(im6).click(function(){
        func(im6,5);
    });
    $(im7).click(function(){
        func(im7,6);
    });
    $(im8).click(function(){
        func(im8,7);
    });
    $(im9).click(function(){
        func(im9,8);
    });
    $(im10).click(function(){
        func(im10,9);
    });

    $(im11).click(function(){
        func(im11,10);
    });
    $(im12).click(function(){
        func(im12,11);
    });
    $(im13).click(function(){
        func(im13,12);
    });
    $(im14).click(function(){
        func(im14,13);
    });
    $(im15).click(function(){
        func(im15,14);
    });

    function func(param, i){
        for(var j=0;j<15;++j)
        {
            if(D[j]==1 && i!=j){
                D[j]=0;
                $(images[j]).css("transform","scale(1)");
            }
        }
        if(D[i]==0){
            D[i]=1;
            $(param).css("transform","scale(1.3)");
        }
        else if (D[i]==1){
            D[i]=0;
            $(param).css("transform","scale(1)");
        }
    }
    //modry
    $(blue_m).click(function(){
        if(D[0]!=1 && D[3]!=1 && D[11]!=1){
            $(blue_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(blue_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(blue_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(blue_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
                if(D[0]+D[3]+D[11]==-3){
                    $(blue_m).html("<p>Vedeli ste, že 10 časopisov sa môže zmeniť na krabicu na televízor?</p>");
                    $(blue_m).css("padding","3px").css("padding-left","10px");  
                }
            }, 500);
        }
    });

    //zeleny
    $(green_m).click(function(){
        if(D[4]!=1 && D[5]!=1 && D[12]!=1){
            $(green_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(green_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(green_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(green_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
                if(D[4]+D[5]+D[12]==-3){
                    $(green_m).html("<p>Vedeli ste, že z 5 zaváracích pohárov môže byť sklenená váza na kvety?</p>");
                    $(green_m).css("padding","3px").css("padding-left","10px");  
                }
            }, 500);
        }
    });

    //zlty
    $(yellow_m).click(function(){
        console.log("Hura");
        if(D[2]!=1 && D[6]!=1 && D[10]!=1){
            $(yellow_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(yellow_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(yellow_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(yellow_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
                if(D[2]+D[6]+D[10]==-3){
                    $(yellow_m).html("<p>Vedeli ste, že z 30-tich PET fliaš môže byt fleecová bunda?</p>");
                    $(yellow_m).css("padding","3px").css("padding-left","10px");  
                }
            }, 500);
        }
    });

    //cerveny
    $(red_m).click(function(){
        console.log("Hura");
        if(D[1]!=1 && D[8]!=1 && D[13]!=1){
            $(red_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(red_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(red_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(red_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
                if(D[1]+D[8]+D[13]==-3){
                    $(red_m).html("<p>Vedeli ste, že zo 670 hliníkových plechoviek sa môže stať rám na bicykel?</p>");
                    $(red_m).css("padding","3px").css("padding-left","10px");  
                }
            }, 500);
        }
    });

    //hnedy
    $(brown_m).click(function(){
        console.log("Hura");
        if(D[7]!=1 && D[9]!=1 && D[14]!=1){
            $(brown_m).css("border","3px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(brown_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(brown_m).css("border","3px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(brown_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
                if(D[7]+D[9]+D[14]==-3){
                    $(brown_m).html("<p>Vedeli ste, že z biologicky rozložitoľného odpadu sa vyrába kompost, ktorý dodáva pestovaným plodinám potrebnú výživu?</p>");
                    $(brown_m).css("padding","3px").css("padding-left","10px");  
                }
            }, 500);
        }
    });
  
});
    
  