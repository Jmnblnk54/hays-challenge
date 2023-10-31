import { useState } from "react";
import "./uploadModal.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { AiFillCloseSquare } from "react-icons/ai";
import FileDrop from "../fileDrop/FileDrop";
import ModalFormRight from "../modalFormRight/ModalFormRight";
import { WiTime2 } from "react-icons/wi";
import ShowFile from "../showFile/ShowFile";

const UploadModal = ({ modalOpen, closeModal }) => {
  const [toggle, setToggle] = useState(true);
  const [rightData, setRightData] = useState({});
  const [files, setFiles] = useState([]);
  const [importName, setImportName] = useState("");
  const elapseDates = false; //temp-update later to pull in elapse date data;
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const getData = ({
    split,
    locations,
    client,
    center1,
    center2,
    center3,
    center4,
  }) => {
    setRightData({
      splitLocation: split,
      locations: locations,
      client: client,
      center1: center1,
      center2: center2,
      center3: center3,
      center4: center4,
    });
  };

  const handleGetFiles = ({ files }) => {
    setFiles(files);
  };

  const handleImport = () => {
    // Add later => Tolerance Level: ${tollerance},
    console.log(`Data Imported:
    Import Name: ${importName},
    Manifest: ${files},
    Elapse Data Checking: ${elapseDates},
    Tolerance Window: ${toggle},
    Split Schedule: ${rightData.splitLocation},
    Locations: ${rightData.locations},
    Client: ${rightData.client},
    Center1: ${rightData.center1},
    Center2: ${rightData.center2},
    Center3: ${rightData.center3},
    Center4: ${rightData.center4}
    `);
  };

  const ImportNameSelector = () => (
    <div className="name-select-container">
      <select
        className="name-select"
        onChange={(e) => setImportName(e.target.value)}
      >
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
                <FileDrop {...{ handleGetFiles }} />
                <hr />
                <ShowFile />
                <hr />
                <hr className="left-hr" />
                <p className="blue-text">Elapse Data Checking:</p>
                <p className="bold elapse-dates">
                  {elapseDates ? (
                    <span classname="elapse">List of Elapse Dates</span>
                  ) : (
                    <span className="no-elapse">No Elapse Dates!</span>
                  )}
                </p>
                <hr className="left-hr" />
                <p className="bold blue-text">Tollerance Window:</p>
                <Row>
                  <Col lg={1}>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      checked={toggle}
                      onChange={handleToggle}
                    />
                  </Col>
                  <Col lg={2}>{toggle ? "Toggle ON" : "Toggle OFF"} |</Col>
                  <Col lg={1}>
                    <WiTime2 size={20} />
                  </Col>
                  <Col lg={4}>Select Tolerance Level</Col>
                </Row>
              </div>
              <div className="right-section">
                <ModalFormRight />
              </div>
            </div>
            <div className="footer">
              <div className="footer-text">
                <p className="bold blue-text">
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
