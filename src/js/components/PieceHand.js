import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import styles from "css/components/PieceHand.css";

import Vars from "js/Vars";
import BasePiece from "js/objects/BasePiece";
import Piece from "js/components/Piece";

class PieceHand extends React.Component {

	static propTypes = {
		player: PropTypes.oneOf([Vars.TOP_PLAYER, Vars.BOTTOM_PLAYER]).isRequired,
		pieceArray: PropTypes.arrayOf(PropTypes.instanceOf(BasePiece)).isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {

		const { player, pieceArray } = this.props;

		return (
			<div styleName="main">
				<div styleName="title">Player {player} Hand ({pieceArray.length})</div>
				<div styleName="pieces">
					{
						pieceArray.map((piece, idx) => <Piece key={idx} piece={piece} inHand/>)
					}
				</div>
			</div>
		)
	}
}

export default CSSModules(PieceHand, styles);
