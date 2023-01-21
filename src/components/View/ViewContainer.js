import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";

export default class ViewContainer extends React.Component {
  render() {
    return (
      <div className="ViewContainer">
        <Container fluid className="p-0">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
