import React from "react";
import CSSModules from "react-css-modules";
import styles from "css/components/Board.css";

import Square from "js/components/Square";

class Board extends React.Component {

	static boardSize = 9;
	static boardKeys = Array(Board.boardSize).fill(Array(Board.boardSize).fill());

	constructor(props) {
		super(props);

		const pieceMap = {};
		for (let row = 0; row < Board.boardSize; row++) {
			for (let col = 0; col < Board.boardSize; col++) {
				pieceMap[Board.getLocation(row, col)] = [null, null, null];
			}
		}

		this.state = {
			pieceMap
		};

		// for function-value use in .map
		this.renderRow = this.renderRow.bind(this);
	}

	static getLocation(row, col) {
		return "ABCDEFGHI"[col] + (row + 1);
	}

	renderSquare(row, col) {
		const location = Board.getLocation(row, col);
		const pieces = this.state.pieceMap[location];
		return <Square
			key={location}
			location={location}
			dark={row % 2 !== col % 2}
			pieces={pieces}
		/>;
	}

	renderRow(row, rowNum) {
		return (
			<div key={rowNum} styleName="row">
				{row.map((v, cellNum) => this.renderSquare(rowNum, cellNum))}
			</div>
		);
	}

	render() {
		return (
			<div styleName="main">
				{Board.boardKeys.map(this.renderRow)}
			</div>
		);
	}

}

export default CSSModules(Board, styles);
