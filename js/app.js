var catElem = document.getElementById('cat');
var catImagElem = document.getElementById('cat-imag');
var countElem = document.getElementById('cat-count');
var catClickCount = 0;

function incrementCounter() {
	catClickCount++;
	view.render();
}

var view = {
	render: function() {
		//update the counter
		countElem.textContent = catClickCount;
	}
}

//attach event listeners
catElem.addEventListener('click', function(e) {
	incrementCounter();
});

//initial render
view.render();

