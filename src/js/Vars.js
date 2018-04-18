import PropTypes from "prop-types";

function enumFrom(...values) {
	const result = {};
	for (const val of values) {
		result[val] = {
			get name() { return val; }
		};
	}

	Object.defineProperty(result, "_propType", {
		enumerable: false,
		configurable: false,
		writable: false,
		value: PropTypes.shape({
			name: PropTypes.string
		})
	});

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
