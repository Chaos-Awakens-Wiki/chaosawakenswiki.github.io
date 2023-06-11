function changeImage(imgURL, imgAlt, type) {
	const image = document.getElementById("entity-information-image");
	const idle = document.getElementById("entity-information-image-selector-item-idle");
	const walking = document.getElementById("entity-information-image-selector-item-walking");

	image.src = imgURL;
	image.alt = imgAlt;

	console.log(type)
	if (type === "idle") {
		idle.style.borderBottom = "lightskyblue 3px solid"
		walking.style.borderBottom = "transparent 3px solid"
	} else if (type === "walking") {
		idle.style.borderBottom = "transparent 3px solid"
		walking.style.borderBottom = "lightskyblue 3px solid"
	}
}