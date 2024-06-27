document.addEventListener("DOMContentLoaded", function() {
	let htmlContent = document.body.innerHTML;

	const title = document.querySelector("title").innerText;
	const newName = title.replace(" | Chaos Awakens Wiki", "");
	htmlContent = htmlContent.replace(/\${name}/g, newName);

	document.body.innerHTML = htmlContent
});
