import "./uploadModal.css";
import { Modal, Button } from "react-bootstrap";

const UploadModal = ({ modalOpen, closeModal }) => {
  return (
    <div className="modal-container">
      <Modal show={modalOpen} onHide={closeModal}>
        <Modal.Body>
          <div className="modal-content">
            <div className="header">icon here, Document Upload</div>
            <hr />
            <div className="form-section">
              <div className="left-section">select, dropbox, toggle, etc</div>
              <div className="right-section">selects, dropdowns</div>
            </div>
            <div className="footer">
              <p>
                Data in the import file is correct. Please press Continue to
                Import
              </p>
              <Button>Continue Import</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UploadModal;
