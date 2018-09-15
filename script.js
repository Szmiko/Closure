//without closure:

/*var count = 0;

window.onload = function() {
	var button = document.getElementById("clickme");
	button.onclick = handleClick;
};

function handleClick() {
	var message = "Kliknąłeś mnie ";
	var div = document.getElementById("message");
	count++;
	div.innerHTML = message + count + " razy!";
};*/

//with closure:

window.onload = function() {
	var count = 0;
	var message = "Kliknąłeś mnie ";
	var div = document.getElementById("message");
	var button = document.getElementById("clickme");

	button.onclick = function() {
		count++;
		div.innerHTML = message + count + " razy!";
	}
};










// ------------------------------
/*function makeCounter() {
	var count = 0;

	return {
		increment: function() {
			count++;
			return count;
		}
	}
};

var counter = makeCounter();
console.log(counter.increment());
*/