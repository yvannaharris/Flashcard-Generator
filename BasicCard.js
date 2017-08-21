var BasicCard = function (front, back) {
	this.front = front;
	this.back = back;
}

module.exports = BasicCard; 

var BasicCards = function (front, back) {
	if (!(this instanceof BasicCards)) {
		return new BasicCards(front, back);
	}
	this.front = front;
	this.back = back;
}