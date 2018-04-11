const Samurai = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		const tier = Math.min(2, tier);

		return moveSets[tier-1].includes([dx, dy]);
	}

};

const Ninja = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		const tier = Math.min(2, tier);

		return moveSets[tier-1].includes([dx, dy]);
	}

};

const Catapult = {
	canMove: function(newX, newY, dx, dy, tier, owner) {
		return false;
	}

};

const Fortress = {
	canMove: function(newX, newY, dx, dy, tier, owner) {
		return false;
	}

};

const HiddenDragon = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		if (tier === 1) {
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

};

const Captain = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		return moveSets[tier-1].includes([dx, dy]);
	}

};

const Prodigy = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		// TODO check for pieces in path

		if (tier === 1) {
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

};

const Archer = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		return moveSets[tier-1].includes([dx, dy]);

	}

};

const Soldier = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		return moveSets[tier-1].includes([dx, dy]);

	}

};

const Pistol = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

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

		const tier = Math.min(2, tier);

		return moveSets[tier-1].includes([dx, dy]);

	}

};

const Pike = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		const tier = Math.min(2, tier);

		return moveSets[tier-1].includes([dx, dy]);

	}

};

const Jounin = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		return moveSets[tier-1].includes([dx, dy]);

	}

};

const Lance = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		// TODO check for pieces in path

		const t = owner === 1 ? 1 : -1; // towardsOpponent

		if (tier === 1) {
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

};

const DragonKing = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		// TODO check for pieces in path

		const diag = [
			[1,1],
			[-1,1],
			[1,-1],
			[-1,-1]
		];

		if (tier === 1) {
			return dx === 0 || dy === 0 || diag.includes([dx, dy])
		}
		else {
			return diag.includes([dx, dy]);
		}
	}

};

const Phoenix = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		// TODO check for pieces in path

		const adjacent = [
			[1,0],
			[-1,0],
			[0,1],
			[0,-1]
		];

		if (tier === 1) {
			return Math.abs(dx) === Math.abs(dy) || adjacent.includes([dx, dy]);
		}
		else {
			return adjacent.includes([dx, dy]);
		}
	}

};

const Arrow = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

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

		return moveSets[tier-1].includes([dx, dy]);

	}

};

const BronzeSoldier = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		return [
			[-1,0],
			[1,0]
		].includes([dx, dy]);

	}

};

const SilverSoldier = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

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

		const tier = Math.min(2, tier);

		return moveSets[tier-1].includes([dx, dy]);

	}

};

const GoldSoldier = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		const t = owner === 1 ? 1 : -1; // towardsOpponent

		return [
			[1,0],
			[-1,0],
			[0,1],
			[0,-1],
			[1,t],
			[-1,t]
		].includes([dx, dy]);

	}

};

const Commander = {
	canMove: function(newX, newY, dx, dy, tier, owner) {

		return [
			[1,0],
			[0,1],
			[-1,0],
			[0,-1],
			[1,1],
			[-1,-1],
			[1,-1],
			[-1,1]
		].includes([dx, dy]);

	}

};

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
