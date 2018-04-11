import React from "react";
import CSSModules from "react-css-modules";
import { Row, Col, Card, CardTitle, CardText, Button, Collapse } from "reactstrap";
import styles from "css/components/ErrorBoundary.css";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			errorInfo: null,
			collapsed: false
		};

		this.toggleCollapse = this.toggleCollapse.bind(this);
	}

	toggleCollapse() {
		this.setState({collapsed: !this.state.collapsed});
	}

	componentDidCatch(error, errorInfo) {
		this.setState({error, errorInfo});
	}

	render() {
		if (this.state.error !== null) {
			return (
				<Row>
					<Col xs="6">
						<Card inverse body color="danger">
							<CardTitle>An error has occurred</CardTitle>
							<CardText>Something went wrong and this application has crashed</CardText>
							<Button styleName="toggle" onClick={this.toggleCollapse}>More information</Button>
							<Collapse styleName="details" tag="pre" isOpen={this.state.collapsed}>
								{
									this.state.error.toString() +
									this.state.errorInfo.componentStack
								}
							</Collapse>
						</Card>
					</Col>
				</Row>
			);
		}
		else {
			return this.props.children;
		}
	}
}

export default CSSModules(ErrorBoundary, styles);
