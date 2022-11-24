

 var num = 1;
 var q = {
    1: {"title":"두번째 질문!",
      "question":"퇴근길에 노래 좀 들어볼까?<br>내 플리 속에는 어떤 노래가 있을까?",
       "type":"EI",
       "A":"밝고 신나는 노래!",
       "B":"적적한 발라드~",
       "img":"./img/Q2.png"
    },

    2: {"title":"세번째 질문!",
     "question":"오랜만에 중학교 동창들을 만나는 날!<br>오늘은 무슨 옷을 입을까?",
      "type":"EI",
      "A":"통통 튀는 옷", 
      "B":"무조건 무채색",
      "img":"./img/Q3.png"
    },

    3: {"title":"네번째 질문!", 
     "question":"오늘은 친구와 제주도를 가기로 한 날!<br>나는 만나기로 한 시간보다 30분 지각하고 마는데...", 
     "type":"SN",
     "A":"정말 미안해ㅠㅠ",
      "B":"내가 왜 늦었냐면...",
      "img":"./img/Q4.png"
    },

    4: {
        "title":"다섯번째 질문!", 
        "question":"친구가 나를 위한 팔찌를 선물해줬다.<br>하지만 나는 똑같은 것을 가지고 있는 상황인데...", 
        "type":"SN",
        "A":"고마워 잘쓸게~!",
        "B":"나 이거 있어!",
        "img":"./img/Q5.png"
    },

    5: {"title":"여섯번째 질문!",
      "question":"친구를 위한 선물을 준비했다.<br>내가 원하는 반응은?", 
      "type":"SN",
      "A":"너무 감동이야!!><", 
      "B":"내가 필요하던거야",
      "img":"./img/Q6.png"
    },

    6: {"title":"일곱번째 질문!",
      "question":"내일은 친구와 홍대를 가기로 한 날.<br>약속 전 날 나는?", 
      "type":"TF",
      "A":"미리 계획한다",
       "B":"당일에 정한다",
       "img":"./img/Q7.png"
    },

    7: {"title":"여덟번째 질문!",
      "question":"토요일 아침, 눈을 떠보니 9시!<br>이럴 때 나는?",
       "type":"TF",
       "A":"일어나서 하루 시작!",
        "B":"더 자야지~",
        "img":"./img/Q8.png"
    },

    8: {"title":"아홉번째 질문!",
      "question":"오늘은 야근한 날. 지친 몸을 이끌고 집에 도착했다.<br>내가 할 행동은?", 
      "type":"TF",
      "A":"샤워 먼저 해야지~",
      "B":"침대로 바로 눕기!",
      "img":"./img/Q9.png"
    },

    9: {}
}

$('#start').click(function(){
    $('#start-article').css('display', 'none');
    $('#question-article').css('display', 'block');
});



// a 클릭 했을때만 1점 부여.

$("#A").click(function(){
    var type = $("#type").val();
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);

    next();
    result();

});


$("#B").click(function(){
    next();
    result();
});

function next() {
    $("#title").html(q[num]["title"]);
    $("#question").html(q[num]["question"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    $("#img").attr('src', q[num]["img"]);
    // attr('src','/material/images/jQuery/asimo.png');
    num++;

    if(num >= 10){
        $('#question-article').css('display', 'none');
        $('#result-article').css('display', 'block');
    }

}


function result(){
    var a = $('#EI').val();
    var b = $('#SN').val();
    var c = $('#TF').val();
    console.log(a ,  b , c);

    if( a >= 2 && b >= 2 && c >= 2){
        console.log("외향 / 공감 / 계획 -> 배려심이 많은 맑음이");
        $("#result").attr('src','./img/result1.png');
    }else if( a >= 2 && b >= 2 && c <= 2){
        console.log("외향 / 공감 / 즉흥 -> 사랑많은 맑음이");
        $("#result").attr('src','./img/result2.png');
    }else if( a >= 2 && b <= 2 && c >= 2){
        console.log("외향 / 판단 / 계획 -> 계획대로 척척하는 전진이");
        $("#result").attr('src','./img/result3.png');
    }else if( a >= 2 && b <= 2 && c <= 2){
        console.log("외향 / 판단 / 즉흥 -> 모험을 즐기는 전진이");
        $("#result").attr('src','./img/result4.png');
    }else if( a <= 2 && b >= 2 && c >= 2){
        console.log("내향 / 공감 / 계획 -> 깊은 대화를 좋아하는 다정이");
        $("#result").attr('src','./img/result5.png');
    }else if( a <= 2 && b >= 2 && c <= 2){
        console.log("내향 / 공감 / 즉흥 -> 감수성이 풍부한 다정이");
        $("#result").attr('src','./img/result6.png');
    }else if( a <= 2 && b <= 2 && c >= 2){
        console.log("내향 / 판단 / 계획 -> 가방끈이 긴 똑똑이");
        $("#result").attr('src','./img/result7.png');
    }else if( a <= 2 && b <= 2 && c <= 2){
        console.log("내향 / 판단 / 즉흥 -> 마이웨이 무심이");
        $("#result").attr('src','./img/result8.png');
    }
}

 //결과 값

