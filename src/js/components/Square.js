import React from "react";
import PropTypes from "prop-types";
import BasePiece from "js/objects/BasePiece";

import CSSModules from "react-css-modules";
import styles from "css/components/Square.css";

class Square extends React.Component {

	static propTypes = {
		dark: PropTypes.bool.isRequired,
		location: PropTypes.string.isRequired,
		// piece tower. array of three pieces, with index representing the tier. this means the last element is on top
		pieces: PropTypes.arrayOf(PropTypes.instanceOf(BasePiece)).isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div styleName={this.props.dark ? "dark" : "light"}>
				<div styleName="location">
					{this.props.location}
				</div>
				<div styleName="pieces">
					{this.props.pieces.map((v, i) => "T" + i + " " + v).join("\n")}
				</div>

			</div>
		);
	}
}

export default CSSModules(Square, styles);
