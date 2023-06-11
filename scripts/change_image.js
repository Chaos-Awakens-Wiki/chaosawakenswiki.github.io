let animationItems;

window.addEventListener("DOMContentLoaded", () => {
	animationItems = {
		idle: document.getElementById("entity-information-image-selector-item-idle"),
		awakening: document.getElementById("entity-information-image-selector-item-awakening"),
		death: document.getElementById("entity-information-image-selector-item-death"),
		walking: document.getElementById("entity-information-image-selector-item-walking")
	};

	for (const animationType in animationItems) {
		if (animationItems.hasOwnProperty(animationType)) {
			const item = animationItems[animationType];
			if (item) {
				item.style.borderBottom = animationType === "idle" ? "lightskyblue 3px solid" : "transparent 3px solid";
			}
		}
	}
});

function changeImage(imgURL, imgAlt, type) {
	const image = document.getElementById("entity-information-image");

	image.src = imgURL;
	image.alt = imgAlt;

	for (const animationType in animationItems) {
		if (animationItems.hasOwnProperty(animationType)) {
			const item = animationItems[animationType];
			const borderStyle = animationType === type ? "lightskyblue 3px solid" : "transparent 3px solid";
			if (item) {
				item.style.borderBottom = borderStyle;
			}
		}
	}
}