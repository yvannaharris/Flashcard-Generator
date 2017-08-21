var ClozeCard = function(text, cloze) {
	this.cloze = cloze;
	this.partial = text.replace(cloze,'...');
	this.fullText = text;
	this.error = function() {
		if (!text.includes(cloze)) {
			console.log('Error: Cloze-deletion does not appear within the full text.');
			return;
		};
	};
};