// nuit
document.querySelector('.night-button').addEventListener('click', function(){
	document.querySelector("h1").style.color = '#F4FFFD';
	document.querySelector("p").style.color = '#F4FFFD';
	document.querySelector(".day-button").style.color = '#465362';
	document.querySelector(".night-button").style.display = "none";
	document.querySelector(".day-button").style.display = "block";
	document.querySelector(".day-button").style.background = '#f3f3f3';
	document.body.style.backgroundColor = '#1e1412';
  document.querySelector('.jacquouillejour').style.display = "none";
  document.querySelector('.jacquouillenuit').style.display = "block";
});

// jour
document.querySelector('.day-button').addEventListener('click', function(){
	document.querySelector("h1").style.color = '#011936';
	document.querySelector("p").style.color = '#011936';
	document.body.style.backgroundColor = '#F4FFFD';
	document.querySelector(".night-button").style.color = '#f3f3f3';
	document.querySelector(".night-button").style.background = '#465362';
	document.querySelector(".day-button").style.display = "none";
	document.querySelector(".night-button").style.display = "block";
  document.querySelector('.jacquouillenuit').style.display = "none";
  document.querySelector('.jacquouillejour').style.display = "block";
});
document.querySelector('.jacquouillenuit').style.display = "none";
document.body.style.backgroundColor = '#F4FFFD';
document.querySelector("h1").style.color = '#011936';
document.querySelector("p").style.color = '#011936';
document.querySelector(".day-button").style.display = "none";

// clickMe button
let clickMe = document.getElementById('clickMe');
clickMe.addEventListener('click', lol);
function lol() {
	document.querySelector('button.lol').outerHTML = '<img src="https://media2.giphy.com/media/3o6ozvv0zsJskzOCbu/giphy.gif?cid=ecf05e47i655p2nmqpfxkh8z14h6s0enb57se4idy8w7xz29&rid=giphy.gif&ct=g" width="80" height="80" id="emojiLol">';
}
