import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import styles from "css/components/PieceHand.css";

import Constants from "js/Constants";
import BasePiece from "js/objects/BasePiece";
import Piece from "js/components/Piece";

class PieceHand extends React.Component {

	static propTypes = {
		player: PropTypes.oneOf([Constants.TOP_PLAYER, Constants.BOTTOM_PLAYER]).isRequired,
		pieceArray: PropTypes.arrayOf(PropTypes.instanceOf(BasePiece)).isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div styleName="main">
				<div styleName="title">Player {this.props.player} Hand ({this.props.pieceArray.length})</div>
				<div styleName="pieces">
					{
						this.props.pieceArray.map((piece, idx) => <Piece key={idx} piece={piece} inHand={true}/>)
					}
				</div>
			</div>
		)
	}
}

export default CSSModules(PieceHand, styles);
