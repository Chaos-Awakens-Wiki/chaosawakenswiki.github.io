(async () => {
	const user = 'ChaosAwakensWiki';
	const repo = 'chaosawakenswiki.github.io';
	const directory = 'blocks';

	const response = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${directory}`);
	const data = await response.json();

	let htmlString = '<div class="category-grid">';

	for (let file of data) {
		if (file.type === 'file' && file.name.endsWith('.html')) {
			const fileName = file.name.replace('.html', '');
			const displayName = fileName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
			let imageName = fileName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('_') + '.png';
			// Check if imageName contains "Enchanted_"
			if (imageName.includes('Enchanted_')) {
				imageName = imageName.replace('Enchanted_', '');
			}
			const imageUrl = `images/blocks/${imageName}`;
			// Construct the link using the file name directly
			const fileUrl = `${directory}/${file.name}`;
			htmlString += `<a href="${fileUrl}" class="category-link">
                                <div class="category-blocks">
                                    <img src="${imageUrl}" alt="${displayName}">
                                    <div class="category-text">${displayName}</div>
                                </div>
                            </a>`;
		}
	}

	htmlString += '</div>';
	const blockList = document.getElementById('blockList');
	if (blockList) {
		blockList.innerHTML = htmlString;
	} else {
		console.error('Element with id "blockList" not found.');
	}
})();
