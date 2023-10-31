import { HiOutlineDocumentText } from "react-icons/hi";
import "./showFile.css";

const ShowFile = ({ files }) => {
  const show = (file) => {
    return (
      <div className="column" key={file.id}>
        <div className="file-container">
          <HiOutlineDocumentText className="file-icon" />
          <span className="file-name">{file.name}</span>
        </div>
      </div>
    );
  };

  return <div className="row">{files?.map(show)}</div>;
};

export default ShowFile;
