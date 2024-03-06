window.addEventListener('resize', moveElements);

function moveElements() {
	const screenWidth = window.innerWidth;
	const wikiGrid = document.querySelector('.wiki-grid');
	const wikiGridRight = document.querySelector('.wiki-grid-right');
	const mainSectionHeader = document.querySelector('.main-section-header');
	const wikiGridLeft = document.querySelector('.wiki-grid-left');

	if (screenWidth <= 950) {
		wikiGridRight.parentNode.removeChild(wikiGridRight);
		mainSectionHeader.parentNode.insertBefore(wikiGridRight, mainSectionHeader.nextSibling);
		wikiGridLeft.style.margin = '10px';
		wikiGrid.style.display = 'block';
	} else {
		wikiGridLeft.parentNode.insertBefore(wikiGridRight, wikiGridLeft.nextSibling);
		wikiGridLeft.style.margin = '';
		wikiGrid.style.display = '';
	}
}

// Call moveElements initially to handle initial screen size
moveElements();
