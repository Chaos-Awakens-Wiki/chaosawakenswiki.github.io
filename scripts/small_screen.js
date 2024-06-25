window.addEventListener('resize', moveElements);

function moveElements() {
	const screenWidth = window.innerWidth;
	const wikiGrid = document.querySelector('.wiki-grid');
	const wikiGridRight = document.querySelector('.wiki-grid-right');
	const mainSectionHeader = document.querySelector('.main-section-header');
	const wikiGridLeft = document.querySelector('.wiki-grid-left');

	if (!wikiGridRight && wikiGridLeft) {
		wikiGridLeft.style.margin = '1rem';
		wikiGrid.style.display = 'block';
	} else if (screenWidth <= 950) {
		if (wikiGridRight && mainSectionHeader) {
			if (wikiGridRight.parentNode) {
				wikiGridRight.parentNode.removeChild(wikiGridRight);
			}
			mainSectionHeader.parentNode.insertBefore(wikiGridRight, mainSectionHeader.nextSibling);
		}
		if (wikiGridLeft) {
			wikiGridLeft.style.margin = '10px';
		}
		if (wikiGrid) {
			wikiGrid.style.display = 'block';
		}
	} else {
		if (wikiGridRight && wikiGridLeft) {
			wikiGridLeft.parentNode.insertBefore(wikiGridRight, wikiGridLeft.nextSibling);
			wikiGridLeft.style.margin = '';
		}
		if (wikiGrid) {
			wikiGrid.style.display = '';
		}
	}
}

// Call moveElements initially to handle initial screen size
moveElements();
