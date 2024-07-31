document.addEventListener('DOMContentLoaded', function() {
	const setupImageSwap = (element, attribute) => {
		const images = element.getAttribute(attribute).split(',');
		const interval = parseInt(element.getAttribute('data-interval'), 10) || 3000;
		let currentIndex = 0;

		const swap = () => {
			currentIndex = (currentIndex + 1) % images.length;
			if (element.tagName.toLowerCase() === 'img') {
				element.src = images[currentIndex];
			} else {
				element.style.backgroundImage = `url(${images[currentIndex]})`;
			}
		};

		setInterval(swap, interval);
	};

	document.querySelectorAll('[data-images]').forEach(element => {
		setupImageSwap(element, 'data-images');
	});
});
