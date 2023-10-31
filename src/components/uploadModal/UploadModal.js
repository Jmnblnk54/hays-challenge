import { useState } from "react";
import "./uploadModal.css";
import { Modal, Button, Form } from "react-bootstrap";
import { AiFillCloseSquare } from "react-icons/ai";
import FileDrop from "../fileDrop/FileDrop";
import ModalFormRight from "../modalFormRight/ModalFormRight";
import { WiTime2 } from "react-icons/wi";
import ShowFile from "../showFile/ShowFile";

const UploadModal = ({ modalOpen, closeModal }) => {
  const ImportNameSelector = () => (
    <div className="name-select-container">
      <select className="name-select">
        <option value="">Select Import Name:</option>
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
      <Modal className="modal-xl" show={modalOpen} onHide={closeModal}>
        <Modal.Body>
          <div className="modal-content">
            <div className="head border-0">
              <AiFillCloseSquare size={26} className="close-icon" />
              <h4 className="blue-text">Document Upload</h4>
              <hr className="header-hr" />
            </div>

            <div className="form-section">
              <div className="left-section">
                <ImportNameSelector />
                <hr className="left-hr" />
                <p className="blue-text bold">
                  Select a manifest that you'd like to import
                </p>
                <FileDrop />
                <hr />
                <ShowFile />
                <hr />
                <hr className="left-hr" />
                <p className="blue-text">Elapse Data Checking:</p>
                <p className="bold elapse-dates">No Elapse Dates!</p>
                <hr className="left-hr" />
                <p className="bold blue-text">Tollerance Window:</p>
                <p>
                  <span>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
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
