import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import { Container, Row, Col, Card, CardTitle, CardText, Button, Collapse } from "reactstrap";
import styles from "css/components/ErrorBoundary.css";

class ErrorBoundary extends React.Component {

	static propTypes = {
		children: PropTypes.node
	};

	constructor(props) {
		super(props);

		this.state = {
			error: null,
			errorInfo: null,
			collapsed: false
		};
	}

	toggleCollapse = () => {
		this.setState({collapsed: !this.state.collapsed});
	}

	componentDidCatch(error, errorInfo) {
		this.setState({error, errorInfo});
	}

	render() {

		const { error, errorInfo, collapsed } = this.state;

		if (error !== null) {
			return (
				<Container>
					<Row>
						<Col xs={{size: 6, offset: 3}}>
							<Card inverse body color="danger">
								<CardTitle>An error has occurred</CardTitle>
								<CardText>Something went wrong and this application has crashed</CardText>
								<Button styleName="toggle" onClick={this.toggleCollapse}>More information</Button>
								<Collapse styleName="details" tag="pre" isOpen={collapsed}>
									{error.toString() + errorInfo.componentStack}
								</Collapse>
							</Card>
						</Col>
					</Row>
				</Container>
			);
		}
		else {
			return this.props.children;
		}
	}
}

export default CSSModules(ErrorBoundary, styles);
