function changeImage(imgURL, imgAlt, type) {
	const image = document.getElementById("entity-information-image");
	const idle = document.getElementById("entity-information-image-selector-item-idle");
	const awakening = document.getElementById("entity-information-image-selector-item-awakening");
	const death = document.getElementById("entity-information-image-selector-item-death");
	const walking = document.getElementById("entity-information-image-selector-item-walking");

	image.src = imgURL;
	image.alt = imgAlt;

	console.log(type)
	if (type === "idle") {
		if (idle ) {
			idle.style.borderBottom = "lightskyblue 3px solid"
		}
		if (awakening ) {
			awakening.style.borderBottom = "transparent 3px solid"
		}
		if (death ) {
			death.style.borderBottom = "transparent 3px solid"
		}
		if (walking ) {
			walking.style.borderBottom = "transparent 3px solid"
		}
	} else if (type === "awakening") {
		if (idle ) {
			idle.style.borderBottom = "transparent 3px solid"
		}
		if (awakening ) {
			awakening.style.borderBottom = "lightskyblue 3px solid"
		}
		if (death ) {
			death.style.borderBottom = "transparent 3px solid"
		}
		if (walking ) {
			walking.style.borderBottom = "transparent 3px solid"
		}
	} else if (type === "death") {
		if (idle ) {
			idle.style.borderBottom = "transparent 3px solid"
		}
		if (awakening ) {
			awakening.style.borderBottom = "transparent 3px solid"
		}
		if (death ) {
			death.style.borderBottom = "lightskyblue 3px solid"
		}
		if (walking ) {
			walking.style.borderBottom = "transparent 3px solid"
		}
	} else if (type === "walking") {
		if (idle ) {
			idle.style.borderBottom = "transparent 3px solid"
		}
		if (awakening ) {
			awakening.style.borderBottom = "transparent 3px solid"
		}
		if (death ) {
			death.style.borderBottom = "transparent 3px solid"
		}
		if (walking ) {
			walking.style.borderBottom = "lightskyblue 3px solid"
		}
	}
}