$(function() {
    $(".trigger_popup_fricc").on('click', function(){
        $('.hover_bkgr_fricc').show();
     });
     $('.hover_bkgr_fricc').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });
     $('.popupCloseButton').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });
     
    var currentQuiz = null;
    $("#startButton").on("click", function() {
        if (currentQuiz == null) {
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(
                function(element, index, array) {
                    $("#options").append(`<input type="radio" name="options" value='${index}'><label>${element[0]}</label><br><br>`)
                }
            );
            
            $("#startButton").attr("value", "Next");
        } else {
            $(":radio").each(function(i, val) {
                if(val.checked) {
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        var finalResult = questions[currentQuiz].answers[i][1];

                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr("value", "重新開始");
                    } else{
                        currentQuiz = questions[currentQuiz].answers[i][1] - 1;

                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`)
                        });
                    }
                    return false;
                }
            });
        }
    });
});