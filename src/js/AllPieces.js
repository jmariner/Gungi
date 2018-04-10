import Piece from "./Piece";

class Samurai extends Piece {

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

class Ninja extends Piece {

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

class Catapult extends Piece {

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {
		return false;
	}

}

class Fortress extends Piece {

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {
		return false;
	}

}

class HiddenDragon extends Piece {

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

class Captain extends Piece {

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

class Prodigy extends Piece {

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

class Archer extends Piece {

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

class Soldier extends Piece {

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

class Pistol extends Piece {

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

class Pike extends Piece {

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

class Jounin extends Piece {

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

class Lance extends Piece {

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

class DragonKing extends Piece {

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

class Phoenix extends Piece {

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

class Arrow extends Piece {

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

class BronzeSoldier extends Piece {

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

class SilverSoldier extends Piece {

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

class GoldSoldier extends Piece {

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

class Samurai extends Piece {

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

class Ninja extends Piece {

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

class Catapult extends Piece {

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {
		return false;
	}

}

class Fortress extends Piece {

	constructor(startX, startY) {
		super(startX, startY);
	}

	canMove(x, y) {
		return false;
	}

}

class HiddenDragon extends Piece {

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

class Captain extends Piece {

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

class Prodigy extends Piece {

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

class Archer extends Piece {

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

class Soldier extends Piece {

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

class Pistol extends Piece {

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

class Pike extends Piece {

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

class Jounin extends Piece {

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

class Lance extends Piece {

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

class DragonKing extends Piece {

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

class Phoenix extends Piece {

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

class Arrow extends Piece {

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

class BronzeSoldier extends Piece {

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

class SilverSoldier extends Piece {

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

class GoldSoldier extends Piece {

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

class Samurai extends Piece {

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

class Commander extends Piece {

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

export {Samurai, Ninja, Catapult, Fortress, HiddenDragon, Captain, Prodigy, Archer, Soldier, Pistol, Pike, Jounin, Lance, DragonKing, Phoenix, Arrow, BronzeSoldier, SilverSoldier, GoldSoldier, Samurai, Ninja, Catapult, Fortress, HiddenDragon, Captain, Prodigy, Archer, Soldier, Pistol, Pike, Jounin, Lance, DragonKing, Phoenix, Arrow, BronzeSoldier, SilverSoldier, GoldSoldier, Samurai, Commander};
