document.addEventListener('DOMContentLoaded', function() {
	const minecraftLinks = document.querySelectorAll('[data-minecraft]');

	minecraftLinks.forEach(function(link) {
		link.addEventListener('click', function(event) {
			const shorthand = this.getAttribute('data-minecraft');
			event.preventDefault();
			window.location.href = 'https://minecraft.wiki/w/' + shorthand;
		});

		link.addEventListener('mouseover', function(event) {
			const shorthand = this.getAttribute('data-minecraft');
			link.setAttribute('href', 'https://minecraft.wiki/w/' + shorthand)
			link.setAttribute('title', "Minecraft Wiki: " + shorthand)
		});
	});
});