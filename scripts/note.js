document.addEventListener('DOMContentLoaded', function() {
	const notes = document.querySelectorAll('[data-note]');

	notes.forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault();
			const noteId = this.getAttribute('data-note');
			const note = document.querySelector('.note-' + noteId);
			console.log(note)
			const noteOffsetTop = note.offsetTop;
			window.scrollTo({ top: noteOffsetTop, behavior: 'smooth' });

			const selection = window.getSelection();
			const range = document.createRange();
			range.selectNodeContents(note);
			selection.removeAllRanges();
			selection.addRange(range);
		});

		link.addEventListener('mouseover', function(event) {
			let noteId = this.getAttribute('data-note');
			console.log("test2: " + noteId);
			if (noteId.includes('-return')) {
				noteId = noteId.replace('-return', '');
			}
			const note = document.querySelector('.note-' + noteId);
			const noteText = note.innerText;
			link.setAttribute('title', noteText);
		});
	});
});