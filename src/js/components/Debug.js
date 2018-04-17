import React from "react";
import CSSModules from "react-css-modules";
import styles from "css/components/Debug.css";

class Debug extends React.Component {
	constructor(props) {
		super(props);
	}

	getDebugData() {
		const { currentState } = this.props.gameState;
		return `State: ${currentState.name}`
	}

	render() {
		return (
			<pre styleName="main">{this.getDebugData()}</pre>
		);
	}
}

export default CSSModules(Debug, styles);
