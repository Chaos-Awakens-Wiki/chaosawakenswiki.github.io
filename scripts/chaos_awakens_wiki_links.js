document.addEventListener('DOMContentLoaded', function() {
	const links = document.querySelectorAll('a');

	links.forEach(function(link) {
		const href = link.getAttribute('href')
		const data_minecraft = link.getAttribute('data-minecraft');
		const hasImageReference = link.innerHTML.includes('<img');

		if (!data_minecraft && !hasImageReference) {
			link.addEventListener('mouseover', function(event) {
				fetch(href)
					.then(response => response.text())
					.then(data => {
						const tempElement = document.createElement('div');
						tempElement.innerHTML = data;

						const pageTitle = tempElement.querySelector('title').textContent;
						const actualPageTitle = pageTitle.replaceAll(" | Chaos Awakens Wiki", "")
						link.setAttribute('title', "Chaos Awakens Wiki: " + actualPageTitle);

					})
					.catch(error => {
						console.log('Error fetching the page:', error)
					})
			});
		}
	});
});