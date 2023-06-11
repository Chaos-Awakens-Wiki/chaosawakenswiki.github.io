document.addEventListener('DOMContentLoaded', function() {
	const links = document.querySelectorAll('a');

	links.forEach(function(link) {
		const href = link.getAttribute('href');
		const data_minecraft = link.getAttribute('data-minecraft');
		const xhr = new XMLHttpRequest();
		xhr.open('HEAD', href, true);
		xhr.onreadystatechange = function () {
			if (!data_minecraft) {
				if (xhr.readyState === 4) {
					if (xhr.status === 404) {
						link.style.color = '#ff6767';

						link.addEventListener('mouseenter', function () {
							this.style.color = '#ce5454';
						});

						// Restore original color on hover out
						link.addEventListener('mouseleave', function () {
							this.style.color = '#ff6767';
						});
					}
				}
			}
		};
		xhr.send();
	});
});