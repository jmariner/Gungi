import React from "react";
import CSSModules from "react-css-modules";
import styles from "css/components/Game.css";

import Constants from "js/Constants";
import Board from "js/components/Board";
import PieceHand from "js/components/PieceHand";

class Game extends React.Component {

	constructor(props) {
		super(props);

		const pieceMap = {};
		for (let row = 0; row < Board.boardSize; row++) {
			for (let col = 0; col < Board.boardSize; col++) {
				pieceMap[Board.getLocation(row, col)] = [null, null, null];
			}
		}

		this.state = {
			squareSize: undefined,
			boardPieceMap: pieceMap,
			handPieceMap: {
				[Constants.TOP_PLAYER]: Array(25).fill(null),
				[Constants.BOTTOM_PLAYER]: Array(25).fill(null)
			}
		};

	}

	static otherPlayer(player) {
		return player === Constants.TOP_PLAYER ? Constants.BOTTOM_PLAYER : Constants.TOP_PLAYER;
	}

	updateSquareSize = () => {
		this.setState({
			squareSize: (window.innerHeight - (Board.boardSize + 1) - 2 * Constants.VERT_PADDING) / Board.boardSize
		});
	}

	componentWillMount() {
		this.updateSquareSize();
		window.addEventListener("resize", this.updateSquareSize);
	}

	render() {

		return (
			<div styleName="main">
				<PieceHand
					player={Constants.TOP_PLAYER}
					pieceArray={this.state.handPieceMap[Constants.TOP_PLAYER]}
				/>
				<Board
					pieceMap={this.state.boardPieceMap}
					squareSize={this.state.squareSize}
				/>
				<PieceHand
					player={Constants.BOTTOM_PLAYER}
					pieceArray={this.state.handPieceMap[Constants.BOTTOM_PLAYER]}
				/>
			</div>
		)
	}

}

export default CSSModules(Game, styles);
