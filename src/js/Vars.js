function enumFrom(...values) {
	const result = {};
	for (const val of values)
		result[val] = {
			get name() { return val; }
		};
	return result;
}

export const State = enumFrom(
	"NOT_STARTED",
	"PLAYING",
	"GAME_OVER"
);

export default {
	TOP_PLAYER: 1,
	BOTTOM_PLAYER: 2,
	MAX_TIER: 3,
	VERT_PADDING: 8
};
