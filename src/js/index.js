import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "js/components/ErrorBoundary";
import Board from "js/components/Board";
import "css/global.css";
import "lib/bootswatch-lux.min.css";

ReactDOM.render(
	<ErrorBoundary>
		<Board/>
	</ErrorBoundary>,
	document.getElementById("root")
);
