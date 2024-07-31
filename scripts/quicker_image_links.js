document.addEventListener('DOMContentLoaded', () => {
	const imageMappings = [
		{ attr: 'minecraft-src', basePath: 'https://minecraft.wiki/images/', defaultExt: '.png' },
		{ attr: 'cablock-src', basePath: '../images/blocks/', defaultExt: '.png' },
		{ attr: 'caentity-src', basePath: '../images/entities/', defaultExt: '.gif' },
		{ attr: 'caitem-src', basePath: '../images/items/', defaultExt: '.png' },
		{ attr: 'camisc-src', basePath: '../images/misc/', defaultExt: '.svg' },
		{ attr: 'capaintings-src', basePath: '../images/paintings/', defaultExt: '.png' },
		{ attr: 'caworldgen-src', basePath: '../images/world_gen/', defaultExt: '.png' }
	];

	imageMappings.forEach(mapping => {
		const images = document.querySelectorAll(`img[${mapping.attr}]`);

		images.forEach(img => {
			let srcValue = img.getAttribute(mapping.attr);
			if (!srcValue.slice(-5).includes('.')) {
				srcValue += mapping.defaultExt;
			}
			const fullSrc = `${mapping.basePath}${srcValue}`;
			img.setAttribute('src', fullSrc);
		});
	});

	const urlMappings = [
		{ attr: 'minecraft-url', basePath: 'https://minecraft.wiki/images/', defaultExt: '.png' },
		{ attr: 'cablock-url', basePath: '../images/blocks/', defaultExt: '.png' },
		{ attr: 'caentity-url', basePath: '../images/entities/', defaultExt: '.gif' },
		{ attr: 'caitem-url', basePath: '../images/items/', defaultExt: '.png' }
	];

	urlMappings.forEach(mapping => {
		const elements = document.querySelectorAll(`[style*="${mapping.attr}("]`);

		elements.forEach(element => {
			const style = element.getAttribute('style');
			const regex = new RegExp(`${mapping.attr}\\(([^)]+)\\)`);
			const match = style.match(regex);
			if (match) {
				let itemName = match[1];
				if (!itemName.slice(-5).includes('.')) {
					itemName += mapping.defaultExt;
				}
				const newStyle = style.replace(regex, `url(${mapping.basePath}${itemName})`);
				element.setAttribute('style', newStyle);
			}
		});
	});
});
