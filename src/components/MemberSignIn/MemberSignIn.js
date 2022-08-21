import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles.scss";

export default class MemberSignIn extends React.Component {
  render() {
    return (
      <Modal show={this.props.isOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
