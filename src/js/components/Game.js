import React from "react";
import CSSModules from "react-css-modules";
import styles from "css/components/Game.css";

import Vars, { State } from "js/Vars";
import Debug from "js/components/Debug";
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
			currentState: State.PLAYING, // temporary. default: NOT_STARTED
			squareSize: undefined,
			boardPieceMap: pieceMap,
			handPieceMap: {
				[Vars.TOP_PLAYER]: Array(25).fill(null),
				[Vars.BOTTOM_PLAYER]: Array(25).fill(null)
			}
		};

	}

	updateSquareSize = () => {
		this.setState({
			squareSize: (window.innerHeight - (Board.boardSize + 1) - 2 * Vars.VERT_PADDING) / Board.boardSize
		});
	}

	componentWillMount() {
		this.updateSquareSize();
		window.addEventListener("resize", this.updateSquareSize);
	}

	render() {

		const { currentState, handPieceMap, boardPieceMap, squareSize } = this.state;

		return (
			<React.Fragment>
				<div styleName="main">
					{currentState !== State.PLAYING && <div styleName="cover"></div>}
					<PieceHand
						player={Vars.TOP_PLAYER}
						pieceArray={handPieceMap[Vars.TOP_PLAYER]}
					/>
					<Board
						pieceMap={boardPieceMap}
						squareSize={squareSize}
					/>
					<PieceHand
						player={Vars.BOTTOM_PLAYER}
						pieceArray={handPieceMap[Vars.BOTTOM_PLAYER]}
					/>
				</div>
				<Debug gameState={this.state}/>
			</React.Fragment>
		);
	}

}

export default CSSModules(Game, styles);
