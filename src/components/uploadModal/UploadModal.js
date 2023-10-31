import { useState } from "react";
import "./uploadModal.css";
import { Modal, Button } from "react-bootstrap";
import { AiFillCloseSquare } from "react-icons/ai";
import DropBox from "../dropBox/DropBox";
import ModalFormRight from "../modalFormRight/ModalFormRight";

const UploadModal = ({ modalOpen, closeModal }) => {
  const ImportNameSelector = () => (
    <div className="name-select-container">
      <select className="name-select">
        <label>Select Import Name:</label>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </select>
    </div>
  );
  return (
    <div className="modal-container">
      <Modal
        className="modal-lg rounded-0"
        show={modalOpen}
        onHide={closeModal}
      >
        <Modal.Body>
          <div className="modal-content">
            <div className="head border-0">
              <AiFillCloseSquare className="close-icon" />
              <h4>Document Upload</h4>
            </div>
            <hr />
            <div className="form-section">
              <div className="left-section">
                <ImportNameSelector />
                <DropBox />
                dropbox, toggle, etc
              </div>
              <div className="right-section">
                <ModalFormRight />
              </div>
            </div>
            <div className="footer">
              <p className="footer-text">
                Data in the import file is correct. Please press Continue to
                Import
              </p>
              <Button className="button1">Continue Import</Button>
              <Button className="button2">Cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UploadModal;
