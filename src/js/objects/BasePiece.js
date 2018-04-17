import Vars from "js/Vars";

export default class BasePiece {

	// piece that this changes into when switching between front and back
	// implemented in subclass
	static oppositeSidePieceCtor = null;

	// store instance of opposite side piece for swapping
	cachedOppositePiece = null;
	// unique number for each subclass
	type = -1;
	// 1 = top, 2 = bottom
	owner = -1;

	constructor(owner) {
		this.type = this.constructor.type;
		this.owner = owner;
	}

	swapOwner() {
		this.owner = this.owner === Vars.TOP_PLAYER ? Vars.BOTTOM_PLAYER : Vars.TOP_PLAYER;
	}

	// get the opposite side piece, if it exists. caches the returned piece as to only instantiate once
	getOppositePiece() {

		const ctor = this.constructor.oppositeSidePieceCtor;

		// if null, assume no opposite type and keep same type
		if (ctor === null) {
			return this;
		}
		else {
			if (this.cachedOppositePiece === null)
				this.cachedOppositePiece = new ctor(this.owner);

			return this.cachedOppositePiece;
		}

	}

	// TODO are there three different types of front soldier pieces?
	/* from docs:
		Soldier and Bronze x7
		Soldier and Silver x1
		Soldier and Gold x1
	*/

	// === subclass should either implement getMoveSets(dir) or override canMove(...) ===

	// can be implemented in subclass. must return an array of arrays of [x,y] pairs
	getMoveSets(dir) {
		return null;
	}

	// can be overridden in subclass
	canMove(newX, newY, dx, dy, direction, tier) {

		const maybeMoves = this.getMoveSets(direction);
		if (maybeMoves !== null) {

			tier = Math.min(maybeMoves.length, tier);
			return maybeMoves[tier-1].includes([dx, dy]);

		}
		else {
			// if getMoveSets returned null, this method (canMove) should've been overridden
			throw new Error("Method canMove not implemented in class " + this.constructor.name);
		}

	}

}
