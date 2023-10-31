import { HiOutlineDocumentText } from "react-icons/hi";
import "./showFile.css";
import { Row, Col } from "react-bootstrap";
import _ from "lodash";

const ShowFile = ({ files }) => {
  console.log("in showfile", files);
  const Show = () =>
    files?.map((file, idx) => (
      <div key={idx} className="file-container">
        <Row>
          <Col lg={1}>
            <HiOutlineDocumentText size={20} className="file-icon" />
          </Col>
          <Col lg={3}>
            <span className="file-name">{`${_.truncate(file.src)}...`}</span>
          </Col>
        </Row>
      </div>
    ));

  return (
    <div className="row">
      <Show />
    </div>
  );
};

export default ShowFile;
