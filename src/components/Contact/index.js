import ContactForm from './ContactForm'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
                    show={this.state.showModal}
                    onHide={this.hideModal}
                    onEscapeKeyDown={this.hideModal}
                    shouldCloseOnOverlayClick={true}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Contact Us
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ContactForm/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
