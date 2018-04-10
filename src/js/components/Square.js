import React from "react";
import ReactDOM from "react-dom";
import CSSModules from "react-css-modules";
import styles from "css/components/Square.css";

function Square(props) {
	return (
		<div styleName={props.dark ? "dark" : "light"}>
		</div>
	);
}

export default CSSModules(Square, styles);
