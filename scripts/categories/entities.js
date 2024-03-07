(async () => {
	const user = 'ChaosAwakensWiki';
	const repo = 'chaosawakenswiki.github.io';
	const directory = 'entities';

	const response = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${directory}`);
	const data = await response.json();

	let htmlString = '<div class="entity-grid">';

	for (let file of data) {
		if (file.type === 'file' && file.name.endsWith('.html')) {
			const fileName = file.name.replace('.html', '');
			const displayName = fileName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
			let imageName = fileName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('_') + '.gif';
			// Check if imageName contains "Enchanted_"
			if (imageName.includes('Enchanted_')) {
				imageName = imageName.replace('Enchanted_', '');
			}
			const imageUrl = `images/entities/${imageName}`;
			// Construct the link using the file name directly
			const fileUrl = `${directory}/${file.name}`;
			htmlString += `<a href="${fileUrl}" target="_blank" class="entity-link">
                                <div class="entity-item">
                                    <img src="${imageUrl}" alt="${displayName}">
                                    <div class="entity-text">${displayName}</div>
                                </div>
                            </a>`;
		}
	}

	htmlString += '</div>';
	const entityList = document.getElementById('entityList');
	if (entityList) {
		entityList.innerHTML = htmlString;
	} else {
		console.error('Element with id "entityList" not found.');
	}
})();
