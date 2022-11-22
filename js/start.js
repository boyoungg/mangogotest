// let main = document.querySelector("#main");
// let testPage01 = document.querySelector("#testPage01");

// function startPage(){
//     main.style.dispaly = "none";
//     testPage01.style.dispaly = "block";
// }

$(document).ready(function(){
    var a = 0;
    var b = 0;
    // var c = 0;
    // var d = 0;


    $('#startButton').click(function(){
        $('#main').addClass('active');
        $('#testPage01').css('display','block');
    });

    $('#selectE').click(function(){
        a++;
        console.log(a);
        $('#testPage01').css('display','none');
        $('#selectE_2').css('display','block');

    });

    $('#selectI').click(function(){
        b++;
        console.log(b);

        $('#testPage01').css('display','none');
        $('#selectE_2').css('display','block');

    });

    $('#selectE_J').click(function(){
        a++;
        console.log(a);
        $('#selectE_2').css('display','none');
        $('#selectI_2').css('display','block');
    });

    $('#selectE_P').click(function(){
        b++;
        console.log(b);

        $('#selectE_2').css('display','none');
        $('#selectI_2').css('display','block');
    });

    $('#selectI_J').click(function(){
        a++;
        console.log('a값' + a + 'b값' + b);
        $('#selectI_2').css('display','none');

        if(a >= 2){
            console.log("외향");
            console.log(a);
            $('#result_01').css('display','block');
        } else if(b >= 2){
            console.log("내향");
            console.log(b);
    
            $('#result_01').css('display','block');
        }
    });

    $('#selectI_P').click(function(){
        b++;
        console.log('a값' + a + 'b값' + b);

        $('#selectI_2').css('display','none');

        if(a >= 2){
            console.log("외향");
            console.log(a);
            $('#result_01').css('display','block');
        } else if(b >= 2){
            console.log("내향");
            console.log(b);
    
            $('#result_02').css('display','block');
        }
    });



});