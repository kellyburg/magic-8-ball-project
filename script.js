$(document).ready(function(){
    var magicEightBall={};
    magicEightBall.listOfAnswers=["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.","My reply is no.", "My sources say no", "Outlook not so good.", "Very doubtful."];
	$("#answer").hide();
    magicEightBall.shakeEightBall= function (question){
		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		
        var randomNumber=Math.floor(Math.random()*magicEightBall.listOfAnswers.length);
        var answer = magicEightBall.listOfAnswers[randomNumber];
    };
var askQuestion = function(){	
	$("#answer").hide();
	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
setTimeout( function(){
	var question=prompt("Ask a Yes/No Question");
	magicEightBall.shakeEightBall(question);}, 500);
	$("#answer").fadeIn(4000);
	
};
	$("#questionButton").click(askQuestion);
    });