import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import styles from "css/components/Square.css";

import Piece from "js/components/Piece";
import BasePiece from "js/objects/BasePiece";

class Square extends React.Component {

	static propTypes = {
		// whether or not this is a dark square
		dark: PropTypes.bool.isRequired,
		// location name, e.g. "A4"
		location: PropTypes.string.isRequired,
		// piece tower. array of three pieces, with index representing the tier. this means the last element is on top
		pieces: PropTypes.arrayOf(PropTypes.instanceOf(BasePiece)).isRequired
	};

	constructor(props) {
		super(props);
		this.renderPiece = this.renderPiece.bind(this);
	}

	renderPiece(piece, tier) {
		return (
			<Piece
				key={this.props.location + "-" + tier}
				piece={piece}
				tier={tier}
				inHand={false}
			/>
		)
	}

	render() {
		return (
			<div styleName={this.props.dark ? "dark" : "light"}>
				<div styleName="location">
					{this.props.location}
				</div>
				<div styleName="pieces">
					{this.props.pieces.map(this.renderPiece)}
				</div>
			</div>
		);
	}
}

export default CSSModules(Square, styles);
