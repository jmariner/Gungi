import BasePiece from "./BasePiece";

class Samurai extends BasePiece {

	static type = 0;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[-1,0],
				[1,0],
				[1,t],
				[-1,t],
				[0,t]
			],
			[ // tier 2 and 3
				[-1,0],
				[1,0],
				[0,2],
				[0,-2],
				[1,t],
				[-1,t]
			]
		];

		const tier = Math.min(2, this.tier);

		return moveSets[tier-1].includes(this.getChange(x, y));
	}

}

class Ninja extends BasePiece {

	static type = 1;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[1,2*t],
				[-1,2*t]
			],
			[ // tier 2 and 3
				[1,t],
				[-1,t],
				[1,2*t],
				[-1,2*t]
			]
		];

		const tier = Math.min(2, this.tier);

		return moveSets[tier-1].includes(this.getChange(x, y));
	}

}

class Catapult extends BasePiece {

	static type = 2;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {
		return false;
	}

}

class Fortress extends BasePiece {

	static type = 3;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {
		return false;
	}

}

class HiddenDragon extends BasePiece {

	static type = 4;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const [dx, dy] = this.getChange(x, y);

		if (this.tier === 1) {
			return dx === 0 || dy === 0;
		}
		else {
			return [
				[1,1],
				[1,-1],
				[-1,1],
				[-1,-1]
			].includes([dx, dy]);
		}

	}

}

class Captain extends BasePiece {

	static type = 5;

	constructor(startX, startY) {
		super(startX, startY);

	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[-1,t],
				[0,t],
				[1,t],
				[1,-t],
				[-1,-t]
			],
			[ // tier 2
				[0,1],
				[0,-1],
				[1,1],
				[-1,-1],
				[1,-1],
				[-1,1]
			],
			[ // tier 3
				[1,1],
				[1,-1],
				[-1,1],
				[-1,-1],
				[-2,0],
				[2,0],
				[-2,2*t],
				[2,2*t]
			]
		];

		return moveSets[this.tier-1].includes(this.getChange(x, y));
	}

}

class Prodigy extends BasePiece {

	static type = 6;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		// TODO check for pieces in path

		const [dx, dy] = this.getChange(x, y);

		if (this.tier === 1) {
			return Math.abs(dx) === Math.abs(dy);
		}
		else {
			return [
				[1,0],
				[0,1],
				[-1,0],
				[0,-1]
			].includes([dx, dy]);
		}
	}

}

class Archer extends BasePiece {

	static type = 7;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[-2,0],
				[2,0],
				[0,2*t],
			],
			[ // tier 2
				[0,1],
				[0,-1],
				[2,2*t],
				[-2,2*t]
			],
			[ // tier 3
				[-2,0],
				[2,0],
				[0,-2*t],
				[2,2*t],
				[-2,2*t]
			]
		];

		return moveSets[this.tier-1].includes(this.getChange(x, y));

	}

}

class Soldier extends BasePiece {

	static type = 8;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[0,t]
			],
			[ // tier 2
				[0,t],
				[2,0],
				[-2,0]
			],
			[ // tier 3
				[1,t],
				[-1,t],
				[2,0],
				[-2,0]
			]
		];

		return moveSets[this.tier-1].includes(this.getChange(x, y));

	}

}

class Pistol extends BasePiece {

	static type = 9;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const moveSets = [
			[ // tier 1
				[1,1],
				[-1,1],
				[1,-1],
				[-1,-1]
			],
			[ // tier 2 and 3
				[1,0],
				[-1,0],
				[0,1],
				[0,-1]
			]
		];

		const tier = Math.min(2, this.tier);

		return moveSets[tier-1].includes(this.getChange(x, y));

	}

}

class Pike extends BasePiece {

	static type = 10;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[1,0],
				[-1,0],
				[0,1],
				[0,-1],
				[0,2*t]
			],
			[ // tier 2 and 3
				[1,1],
				[-1,1],
				[1,-1],
				[-1,-1]
			]
		];

		const tier = Math.min(2, this.tier);

		return moveSets[tier-1].includes(this.getChange(x, y));

	}

}

class Jounin extends BasePiece {

	static type = 11;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[0,-t],
				[1,2*t],
				[-1,2*t]
			],
			[ // tier 2
				[0,-t],
				[1,2*t],
				[-1,2*t],
				[1,t],
				[-1,t]
			],
			[ // tier 3
				[0,-t],
				[1,2*t],
				[-1,2*t],
				[1,t],
				[-1,t],
				[1,-2*t],
				[-1,-2*t],
				[2,-2*t],
				[-2,-2*t]
			]
		];

		return moveSets[this.tier-1].includes(this.getChange(x, y));

	}

}

class Lance extends BasePiece {

	static type = 12;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		// TODO check for pieces in path

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent
		const [dx, dy] = this.getChange(x, y);

		if (this.tier === 1) {
			return dy === 0 && Math.sign(dx) === t;
		}
		else {
			return [
				[1,1],
				[-1,1],
				[1,-1],
				[-1,-1]
			].includes([dx, dy]);
		}
	}

}

class DragonKing extends BasePiece {

	static type = 13;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		// TODO check for pieces in path

		const [dx, dy] = this.getChange(x, y);

		const diag = [
			[1,1],
			[-1,1],
			[1,-1],
			[-1,-1]
		];

		if (this.tier === 1) {
			return dx === 0 || dy === 0 || diag.includes([dx, dy])
		}
		else {
			return diag.includes([dx, dy]);
		}
	}

}

class Phoenix extends BasePiece {

	static type = 14;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		// TODO check for pieces in path

		const [dx, dy] = this.getChange(x, y);

		const adjacent = [
			[1,0],
			[-1,0],
			[0,1],
			[0,-1]
		];

		if (this.tier === 1) {
			return Math.abs(dx) === Math.abs(dy) || adjacent.includes([dx, dy]);
		}
		else {
			return adjacent.includes([dx, dy]);
		}
	}

}

class Arrow extends BasePiece {

	static type = 15;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		const moveSets = [
			[ // tier 1
				[0,t],
				[0,-t],
				[1,-t],
				[-1,-t]
			],
			[ // tier 2
				[0,t],
				[0,-t],
				[2,-2*t],
				[-2,-2*t]
			],
			[ // tier 3
				[0,t],
				[0,-t],
				[1,-t],
				[-1,-t],
				[2,-2*t],
				[-2,-2*t]
			]
		];

		return moveSets[this.tier-1].includes(this.getChange(x, y));

	}

}

class BronzeSoldier extends BasePiece {

	static type = 16;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		return [
			[-1,0],
			[1,0]
		].includes(this.getChange(x, y));

	}

}

class SilverSoldier extends BasePiece {

	static type = 17;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const moveSets = [
			[ // tier 1
				[1,0],
				[-1,0],
				[0,1],
				[0,-1]
			],
			[ // tier 2 and 3
				[1,1],
				[-1,1],
				[1,-1],
				[-1,-1]
			]
		];

		const tier = Math.min(2, this.tier);

		return moveSets[tier-1].includes(this.getChange(x, y));

	}

}

class GoldSoldier extends BasePiece {

	static type = 18;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		const t = this.owner === 1 ? 1 : -1; // towardsOpponent

		return [
			[1,0],
			[-1,0],
			[0,1],
			[0,-1],
			[1,t],
			[-1,t]
		].includes(this.getChange(x, y));

	}

}

class Commander extends BasePiece {

	static type = 19;

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {

		return [
			[1,0],
			[0,1],
			[-1,0],
			[0,-1],
			[1,1],
			[-1,-1],
			[1,-1],
			[-1,1]
		].includes(this.getChange(x, y));


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
