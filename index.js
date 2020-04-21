function show() {
	var x = document.getElementById('demo');
	if(!x.checkValidity()) {
document.querySelector("#error").style.display = 'block';
	} else {
 document.querySelector("#error");
	x.style.display = 'none';
	}
	if(x.patternMismatch) {
document.querySelector("#error").style.display = 'block';
	}
}
function hide() {
 x = document.querySelector("#error");
	x.style.display = 'none';
};