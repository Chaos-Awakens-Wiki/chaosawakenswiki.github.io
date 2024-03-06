window.onload = function() {
	// Function to fetch the list of HTML files in the entities folder
	function fetchEntities() {
		return fetch('/entities/') // Adjust the path to your entities folder
			.then(response => response.text())
			.then(text => {
				const parser = new DOMParser();
				const htmlDocument = parser.parseFromString(text, 'text/html');
				const links = Array.from(htmlDocument.querySelectorAll('a[href$=".html"]'));
				return links.map(link => link.getAttribute('href'));
			})
			.catch(error => console.error('Error fetching entities:', error));
	}

	// Function to generate the list of links
	function generateEntityLinks(entityFiles) {
		const entityList = document.getElementById('entityList');
		entityFiles.forEach(file => {
			const listItem = document.createElement('li');
			const link = document.createElement('a');
			link.href = `/entities/${file}`; // Adjust the path as needed
			link.textContent = file.replace('.html', '');
			listItem.appendChild(link);
			entityList.appendChild(listItem);
		});
	}

	// Fetch entities and generate links when the page loads
	fetchEntities().then(generateEntityLinks);
};
