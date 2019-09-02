import ContactForm from './ContactForm'
import Modal from 'react-bootstrap/Modal'
import ContactButton from './ContactButton';
import React from 'react';

export default class ContactButtonView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    showModal = () => {
        this.setState({showModal: true});
    }

    hideModal = () => {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <ContactButton onClick={this.showModal}/>
                <Modal
                    className="ContactModal"
                    show={this.state.showModal}
                    onHide={this.hideModal}
                    onEscapeKeyDown={this.hideModal}
                    shouldcloseonoverlayclick="true"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Contact Us
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="ContactModalBody">
                        <ContactForm/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
