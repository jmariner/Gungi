export default class BasePiece {

	constructor(startX, startY, owner) {

		this.type = this.constructor.type;

		this.pos = {
			x: startX,
			y: startY
		};

		// tier, or height in tower, of this piece
		this.tier = 1;

		// piece that this changes into when switching between front and back
		this.oppositeSidePiece = null;

		// 1 = top, 2 = bottom
		this.owner = owner;

	}

	// implemented in subclasses
	canMove(x, y) {
		throw new Error("Not implemented");
	}

	getChange(x, y) {
		return [x - this.pos.x, y - this.pos.y];
	}

}
