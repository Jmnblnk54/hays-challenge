import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

const ModalFormRight = () => {
  const [selectedClients, setSelectedClients] = useState([]);
  const clientArray = ["Client 1", "Client 2", "Client 3", "Client 4"];
  const available = true; // update with imported data to render available locations
  const SelectArray = () => (
    <Row>
      <Col></Col>
    </Row>
  );
  return (
    <div className="model-right-container">
      <div className="split">
        <p className="split-text">Split schedule using social distancing?</p>
      </div>
      <div className="radio">
        <Form.Check
          inline
          label="Yes"
          name="yes"
          type="radio"
          id="inline-radio-1"
        />
        <Form.Check
          inline
          label="No"
          name="no"
          type="radio"
          id="inline-radio-2"
        />
        <br />

        <div className="location">
          <p className="location-text">Location Checking:</p>
          {available ? (
            <p className="all-available">All Available!</p>
          ) : (
            <p className="not-available">Not Available!</p>
          )}
        </div>

        <div className="client">
          <p className="client-text">Client:</p>
          <Form.Check
            inline
            label="Single"
            name="single"
            type="radio"
            id="inline-radio-1"
          />
          <Form.Check
            inline
            label="Multiple"
            name="multiple"
            type="radio"
            id="inline-radio-2"
          />
        </div>
        <div className="selects-section">
          <Row>
            <Col>Testing Center1</Col>
            <Col>selects go here</Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ModalFormRight;
