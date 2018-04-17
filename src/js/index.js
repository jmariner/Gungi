import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "js/components/ErrorBoundary";
import Game from "js/components/Game";
import "css/global.css";
import "lib/bootswatch-lux.min.css";

ReactDOM.render(
	<ErrorBoundary>
		<Game/>
	</ErrorBoundary>,
	document.getElementById("root")
);

// export some objects into the global scope
export  * from "js/objects/PieceClassDefinitions";
export { default as BasePiece } from "js/objects/BasePiece";
export { default as Vars, State } from "js/Vars";
