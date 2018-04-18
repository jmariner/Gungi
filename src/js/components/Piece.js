import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import styles from "css/components/Piece.css";

import Vars from "js/Vars";
import BasePiece from "js/objects/BasePiece";

class Piece extends React.Component {

	static propTypes = {
		tier: (props, propName, compName) => {
			const tier = props[propName];
			if (tier < 0 || tier > Vars.MAX_TIER)
				return new Error(`Invalid property ${propName} on ${compName}. Validation failed.`);
		},
		piece: PropTypes.instanceOf(BasePiece),
		inHand: PropTypes.bool
	};

	constructor(props) {
		super(props);
	}

	render() {

		// temporary piece rendering
		const { piece: thisPiece, inHand, tier } = this.props;
		const name = thisPiece === null ? "null" : thisPiece.constructor.name;
		const offset = (30 * tier) + "%";

		const thisStyle = inHand ? {} : {
			transform: `translate(${offset}, ${offset})`,
			zIndex: tier + 10
		};

		return (
			<div
				styleName={inHand ? "inHand" : "onBoard"}
				style={thisStyle}
			>
				{name}
			</div>
		);
	}
}

export default CSSModules(Piece, styles);
