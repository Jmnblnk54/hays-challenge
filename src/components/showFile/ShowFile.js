import { HiOutlineDocumentText } from "react-icons/hi";
import "./showFile.css";

const ShowFile = ({ files }) => {
  console.log("in showfile", files);
  const show = (file) => {
    return (
      <div className="column" key={file.id + file.src}>
        <div className="file-container">
          <HiOutlineDocumentText size={20} className="file-icon" />
          <span className="file-name">{file.src}</span>
        </div>
      </div>
    );
  };

  return <div className="row">{files?.map(show)}</div>;
};

export default ShowFile;
