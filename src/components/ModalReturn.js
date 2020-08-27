import React from 'react';
import { Modal } from 'react-bootstrap'

function ResultModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Request Status
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.msg}</p>
            </Modal.Body>
        </Modal>
    );
}

export { ResultModal };