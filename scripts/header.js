window.onload = () => {
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".nav-dropdown");
	
	const isDescendant = (parent, child) => {
		let node = child.parentNode;
		while (node != null) {
			if (node === parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	};
	
	document.body.addEventListener("click", (event) => {
		if (!event.target.classList.contains("hamburger") && !isDescendant(nav, event.target)) {
			hamburger.classList.remove("active");
			nav.classList.remove("active");
		}
	});

	hamburger.addEventListener("click", () => {
		event.stopPropagation();
		hamburger.classList.toggle("active")
		nav.classList.toggle("active")
	})
};
