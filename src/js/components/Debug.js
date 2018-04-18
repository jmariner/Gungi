import React from "react";
import CSSModules from "react-css-modules";
import styles from "css/components/Debug.css";

class Debug extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const { currentState } = this.props.gameState;
		const debugData = `State: ${currentState.name}`;

		return (
			<pre styleName="main">{debugData}</pre>
		);
	}
}

export default CSSModules(Debug, styles);
