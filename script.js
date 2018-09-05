$(document).ready(function(){
    var magicEightBall={};
    magicEightBall.listOfAnswers=["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.","My reply is no.", "My sources say no", "Outlook not so good.", "Very doubtful."];
    magicEightBall.shakeEightBall= function (question){
        var randomNumber=Math.floor(Math.random()*magicEightBall.listOfAnswers.length);
        var answer = magicEightBall.listOfAnswers[randomNumber];
$("#answer").text(answer);
    };
var askQuestion = function(){
	var question=prompt("Ask a Yes/No Question");
	magicEightBall.shakeEightBall(question);
};
	$("#questionButton").click(askQuestion);
    });