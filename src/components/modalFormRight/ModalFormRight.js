import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { WiTime2 } from "react-icons/wi";
import "./modalFormRight.css";

const ModalFormRight = () => {
  const [selectedClients, setSelectedClients] = useState([]);
  const [clientSelect, setClientSelect] = useState(Array(4).fill(""));
  const [radioOptionSocial, setRadioOptionSocial] = useState("Yes");
  const [radioOptionClient, setRadioOptionClient] = useState("Single");
  const clientArray = ["Client 1", "Client 2", "Client 3", "Client 4"];
  const available = true; // update with imported data to render available locations
  const handleSelectChange = (index, e) => {
    const selectedValue = e.target.value;
    const newSelectedOptions = [...clientSelect];
    newSelectedOptions[index] = selectedValue;
    setClientSelect(newSelectedOptions);
  };

  const SelectOptions = () => {
    clientArray.map((client) => <option value={client}>{client}</option>);
  };

  const handleRadioSocialChange = (e) => {
    setRadioOptionSocial(e.target.value);
  };

  const handleRadioClientChange = (e) => {
    setRadioOptionClient(e.target.value);
  };

  return (
    <div className="model-right-container">
      <div className="split">
        <p className="bold blue-text split-text">
          Split schedule using social distancing?
        </p>
      </div>
      <div className="radio">
        <Form.Check
          inline
          label="Yes"
          name="yes"
          type="radio"
          value="Yes"
          checked={radioOptionSocial === "Yes"}
          id="inline-radio-1"
          onChange={handleRadioSocialChange}
        />
        <Form.Check
          inline
          label="No"
          name="no"
          value="No"
          type="radio"
          checked={radioOptionSocial === "No"}
          onChange={handleRadioSocialChange}
          id="inline-radio-2"
        />
        <hr className="" />

        <div className="location">
          <p className="bold blue-text location-text">Location Checking:</p>
          {available ? (
            <p className="all-available">All Available!</p>
          ) : (
            <p className="not-available">Not Available!</p>
          )}
        </div>

        <div className="client">
          <p className="bold blue-text client-text">Client:</p>
          <Form.Check
            inline
            label="Single"
            name="single"
            value="Single"
            type="radio"
            checked={radioOptionClient === "Single"}
            onChange={handleRadioClientChange}
            id="inline-radio-1"
          />
          <Form.Check
            inline
            label="Multiple"
            name="multiple"
            value="Multiple"
            type="radio"
            checked={radioOptionClient === "Multiple"}
            onChange={handleRadioClientChange}
            id="inline-radio-2"
          />
        </div>
        <div className="selects-section">
          {Array.from({ length: 4 }).map((_, index) => (
            <Row>
              <Col className="testing">
                <p className="testing-text">{`Testing Center ${index + 1}`}</p>
              </Col>
              <Col>
                <select
                  className="client-select"
                  key={index}
                  value={clientSelect[index]}
                  onChange={(e) => handleSelectChange(index, e)}
                >
                  <option value="">Select Client</option>
                  {SelectOptions}
                </select>
              </Col>
              <Col>
                <WiTime2 size={20} />
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalFormRight;
