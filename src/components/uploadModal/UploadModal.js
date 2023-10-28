import "./uploadModal.css";
import { Modal, Button } from "react-bootstrap";

const UploadModal = ({ modalOpen, closeModal }) => {
  return (
    <div className="modal-container">
      <Modal show={modalOpen} onHide={closeModal}>
        <Modal.Body>Howdy</Modal.Body>
      </Modal>
    </div>
  );
};

export default UploadModal;
