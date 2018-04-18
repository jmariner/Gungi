import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import styles from "css/components/Board.css";

import BasePiece from "js/objects/BasePiece";
import Square from "js/components/Square";

class Board extends React.Component {

	static propTypes = {
		pieceMap: PropTypes.objectOf(
			PropTypes.arrayOf(
				PropTypes.instanceOf(BasePiece)
			)
		).isRequired,
		squareSize: PropTypes.number.isRequired
	};

	static boardSize = 9;
	static boardKeys = Array(Board.boardSize).fill(Array(Board.boardSize).fill());

	constructor(props) {
		super(props);
	}

	static getLocation(row, col) {
		return "ABCDEFGHI"[col] + (row + 1);
	}

	renderSquare = (row, col) => {
		const location = Board.getLocation(row, col);
		return <Square
			key={location}
			location={location}
			dark={row % 2 !== col % 2}
			pieces={this.props.pieceMap[location]}
		/>;
	}

	renderRow = (row, rowNum) => {
		return (
			<div key={rowNum} styleName="row">
				{row.map((v, cellNum) => this.renderSquare(rowNum, cellNum))}
			</div>
		);
	}

	render() {

		const { squareSize } = this.props;

		const style = {
			"--size_square": squareSize + "px",
			"--size_piece": (squareSize * 0.5) + "px"
		};

		return (
			<div styleName="main" style={style}>
				{Board.boardKeys.map(this.renderRow)}
			</div>
		);
	}

}

export default CSSModules(Board, styles);
