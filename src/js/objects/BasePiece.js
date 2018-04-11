export default class BasePiece {

	constructor(startX, startY) {

		this.pos = {
			x: startX,
			y: startY
		};

		this.tier = 1;

		this.oppositeSidePiece = null;

		// 1 = top, 2 = bottom
		this.owner = 1;

	}

	canMove(x, y) {
		throw new Error("Not implemented");
	}

	getChange(x, y) {
		return [x - this.pos.x, y - this.pos.y];
	}

}
