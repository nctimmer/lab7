function init(){
	var button = document.getElementById('entrybutton');
	var input = document.getElementById('entryinput');
	var output = document.getElementById('textoutput');

	button.addEventListener('click', function() {
		output.innerHTML = input.value;
		alert("Noah Timmer: " + input.value);
	} );

}

 
window.addEventListener('load', init);