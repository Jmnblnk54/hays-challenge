import { useState } from "react";
import "./uploadModal.css";
import { Modal, Button, Form } from "react-bootstrap";
import { AiFillCloseSquare } from "react-icons/ai";
import DropBox from "../dropBox/DropBox";
import ModalFormRight from "../modalFormRight/ModalFormRight";
import { WiTime2 } from "react-icons/wi";

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
              <h4 className="blue-text">Document Upload</h4>
            </div>
            <hr className="header-hr" />
            <div className="form-section">
              <div className="left-section">
                <ImportNameSelector />
                <DropBox />
                <hr />
                <p className="blue-text">Elapse Data Checking:</p>
                <p className="elapse-dates">No Elapse Dates!</p>
                <hr />
                <p className="blue-text">Tollerance Window:</p>
                <p>
                  <span>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      // label="Toggle ON"
                    />
                  </span>
                  <span>ToggleON |</span>
                  <span>
                    <WiTime2 size={20} />
                  </span>
                  <span>Select Tolerance Level</span>
                </p>
              </div>
              <div className="right-section">
                <ModalFormRight />
              </div>
            </div>
            <div className="footer">
              <div className="footer-text">
                <p className="blue-text">
                  Data in the import file is correct. Please press Continue to
                  Import
                </p>
              </div>
              <div className="import-buttons">
                <Button className="button1">Continue Import</Button>
                <Button className="button2">Cancel</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UploadModal;
