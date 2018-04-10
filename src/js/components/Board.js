import React from "react";
import ReactDOM from "react-dom";
import CSSModules from "react-css-modules";
import styles from "css/components/Board.css";

import Square from "js/components/Square";

class Board extends React.Component {

	constructor(props) {
		super(props);
		const boardSize = 8;
		this.boardKeys = [...Array(boardSize)].map(() => [...Array(boardSize)]);
		this.renderRow = this.renderRow.bind(this);
		this.renderSquare = this.renderSquare.bind(this);
	}

	renderSquare(row, col) {
		return (<Square
			key={row + "-" + col}
			dark={row % 2 !== col % 2}
		/>);
	}

	renderRow(row, rowNum) {
		return (
			<div key={rowNum} styleName="row">
				{row.map((cell, cellNum) => this.renderSquare(rowNum, cellNum))}
			</div>
		);
	}

	render() {

		return (
			<div styleName="board">
				{this.boardKeys.map(this.renderRow)}
			</div>
		);

	}

}

export default CSSModules(Board, styles);
