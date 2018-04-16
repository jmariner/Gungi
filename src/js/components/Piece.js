import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import styles from "css/components/Piece.css";

import Constants from "js/Constants";
import BasePiece from "js/objects/BasePiece";

class Piece extends React.Component {

	static propTypes = {
		tier: (props, propName, compName) => {
			const tier = props[propName];
			if (tier < 0 || tier > Constants.MAX_TIER)
				return new Error(`Invalid property ${propName} on ${compName}. Validation failed.`);
		},
		piece: PropTypes.instanceOf(BasePiece),
		inHand: PropTypes.bool.isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {

		// temporary piece rendering
		const thisPiece = this.props.piece;
		const name = thisPiece === null ? "null" : thisPiece.constructor.name;
		const tier = this.props.tier;
		const offset = (30 * tier) + "%";

		const thisStyle = this.props.inHand ? {} : {
			transform: `translate(${offset}, ${offset})`,
			zIndex: tier + 10
		};

		return (
			<div
				styleName={this.props.inHand ? "inHand" : "onBoard"}
				style={thisStyle}
			>
				{name}
			</div>
		);
	}
}

export default CSSModules(Piece, styles);
