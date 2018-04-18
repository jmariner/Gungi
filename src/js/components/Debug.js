import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import styles from "css/components/Debug.css";

import { State } from "js/Vars";

class Debug extends React.Component {

	static propTypes = {
		gameState: PropTypes.shape({
			currentState: State._propType
		})
	};

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
