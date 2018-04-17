import BasePiece from "./BasePiece";

class Samurai extends BasePiece {

	static type = 0;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[-1, 0],
				[1, 0],
				[1, dir],
				[-1, dir],
				[0, dir]
			],
			[ // tier 2 and 3
				[-1, 0],
				[1, 0],
				[0, 2],
				[0, -2],
				[1, dir],
				[-1, dir]
			]
		];
	}

}

class Ninja extends BasePiece {

	static type = 1;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[1, 2*dir],
				[-1, 2*dir]
			],
			[ // tier 2 and 3
				[1, dir],
				[-1, dir],
				[1, 2*dir],
				[-1, 2*dir]
			]
		];
	}

}

class Catapult extends BasePiece {

	static type = 2;

	canMove() {
		return false;
	}

}

class Fortress extends BasePiece {

	static type = 3;

	canMove() {
		return false;
	}

}

class HiddenDragon extends BasePiece {

	static type = 4;

	canMove(newX, newY, dx, dy, direction, tier) {

		if (tier === 1) {
			return dx === 0 || dy === 0;
		}
		else {
			return [
				[1, 1],
				[1, -1],
				[-1, 1],
				[-1, -1]
			].includes([dx, dy]);
		}

	}

}

class Captain extends BasePiece {

	static type = 5;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[-1, dir],
				[0, dir],
				[1, dir],
				[1, -dir],
				[-1, -dir]
			],
			[ // tier 2
				[0, 1],
				[0, -1],
				[1, 1],
				[-1, -1],
				[1, -1],
				[-1, 1]
			],
			[ // tier 3
				[1, 1],
				[1, -1],
				[-1, 1],
				[-1, -1],
				[-2, 0],
				[2, 0],
				[-2, 2*dir],
				[2, 2*dir]
			]
		];
	}

}

class Prodigy extends BasePiece {

	static type = 6;

	canMove(newX, newY, dx, dy, direction, tier) {

		// TODO check for pieces in path

		if (tier === 1) {
			return Math.abs(dx) === Math.abs(dy);
		}
		else {
			return [
				[1, 0],
				[0, 1],
				[-1, 0],
				[0, -1]
			].includes([dx, dy]);
		}
	}

}

class Archer extends BasePiece {

	static type = 7;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[-2, 0],
				[2, 0],
				[0, 2*dir],
			],
			[ // tier 2
				[0, 1],
				[0, -1],
				[2, 2*dir],
				[-2, 2*dir]
			],
			[ // tier 3
				[-2, 0],
				[2, 0],
				[0, -2*dir],
				[2, 2*dir],
				[-2, 2*dir]
			]
		];
	}

}

class Soldier extends BasePiece {

	static type = 8;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[0, dir]
			],
			[ // tier 2
				[0, dir],
				[2, 0],
				[-2, 0]
			],
			[ // tier 3
				[1, dir],
				[-1, dir],
				[2, 0],
				[-2, 0]
			]
		];
	}

}

class Pistol extends BasePiece {

	static type = 9;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[1, 1],
				[-1, 1],
				[1, -1],
				[-1, -1]
			],
			[ // tier 2 and 3
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1]
			]
		];
	}

}

class Pike extends BasePiece {

	static type = 10;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1],
				[0, 2*dir]
			],
			[ // tier 2 and 3
				[1, 1],
				[-1, 1],
				[1, -1],
				[-1, -1]
			]
		];
	}

}

class Jounin extends BasePiece {

	static type = 11;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[0, -dir],
				[1, 2*dir],
				[-1, 2*dir]
			],
			[ // tier 2
				[0, -dir],
				[1, 2*dir],
				[-1, 2*dir],
				[1, dir],
				[-1, dir]
			],
			[ // tier 3
				[0, -dir],
				[1, 2*dir],
				[-1, 2*dir],
				[1, dir],
				[-1, dir],
				[1, -2*dir],
				[-1, -2*dir],
				[2, -2*dir],
				[-2, -2*dir]
			]
		];
	}

}

class Lance extends BasePiece {

	static type = 12;

	canMove(newX, newY, dx, dy, direction, tier) {

		// TODO check for pieces in path

		if (tier === 1) {
			return dy === 0 && Math.sign(dx) === dir;
		}
		else {
			return [
				[1, 1],
				[-1, 1],
				[1, -1],
				[-1, -1]
			].includes([dx, dy]);
		}
	}

}

class DragonKing extends BasePiece {

	static type = 13;

	canMove(newX, newY, dx, dy, direction, tier) {

		// TODO check for pieces in path

		const diag = [
			[1, 1],
			[-1, 1],
			[1, -1],
			[-1, -1]
		];

		if (tier === 1) {
			return dx === 0 || dy === 0 || diag.includes([dx, dy])
		}
		else {
			return diag.includes([dx, dy]);
		}
	}

}

class Phoenix extends BasePiece {

	static type = 14;

	canMove(newX, newY, dx, dy, direction, tier) {

		// TODO check for pieces in path

		const adjacent = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1]
		];

		if (tier === 1) {
			return Math.abs(dx) === Math.abs(dy) || adjacent.includes([dx, dy]);
		}
		else {
			return adjacent.includes([dx, dy]);
		}
	}

}

class Arrow extends BasePiece {

	static type = 15;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[0, dir],
				[0, -dir],
				[1, -dir],
				[-1, -dir]
			],
			[ // tier 2
				[0, dir],
				[0, -dir],
				[2, -2*dir],
				[-2, -2*dir]
			],
			[ // tier 3
				[0, dir],
				[0, -dir],
				[1, -dir],
				[-1, -dir],
				[2, -2*dir],
				[-2, -2*dir]
			]
		];
	}

}

class BronzeSoldier extends BasePiece {

	static type = 16;

	getMoveSets(dir) {
		return [
			[
				[-1,0],
				[1,0]
			]
		];
	}

}

class SilverSoldier extends BasePiece {

	static type = 17;

	getMoveSets(dir) {
		return [
			[ // tier 1
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1]
			],
			[ // tier 2 and 3
				[1, 1],
				[-1, 1],
				[1, -1],
				[-1, -1]
			]
		];
	}

}

class GoldSoldier extends BasePiece {

	static type = 18;

	getMoveSets(dir) {
		return [
			[
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1],
				[1, dir],
				[-1, dir]
			]
		];
	}

}

class Commander extends BasePiece {

	static type = 19;

	getMoveSets(dir) {
		return [
			[
				[1, 0],
				[0, 1],
				[-1, 0],
				[0, -1],
				[1, 1],
				[-1, -1],
				[1, -1],
				[-1, 1]
			]
		];
	}

}

export {
	Samurai,
	Ninja,
	Catapult,
	Fortress,
	HiddenDragon,
	Captain,
	Prodigy,
	Archer,
	Soldier,
	Pistol,
	Pike,
	Jounin,
	Lance,
	DragonKing,
	Phoenix,
	Arrow,
	BronzeSoldier,
	SilverSoldier,
	GoldSoldier,
	Commander
};
