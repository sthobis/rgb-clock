(function() {

	var clockDOM = document.querySelector('.clock');
	var mainDOM = document.querySelector('div[role="main"]');

	setInterval(function() {

		var d = new Date();
		dateString = d.toTimeString().split(' ')[0];
		clockDOM.innerHTML = '# ' + dateString;

		var rgb = '#' + dateString.substring(0, 2) + dateString.substring(3, 5) + dateString.substring(6, 8);
		mainDOM.style.backgroundColor = rgb;

	}, 1000);

})();