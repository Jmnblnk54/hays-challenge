import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import "./imageDrop.css";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const DropBox = ({ onDrop }) => {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>
      {list.path} - {list.size} bytes
    </li>
  ));

  return (
    <>
      {" "}
      <section className="dropbox">
        <div
          className="dropbox-container dropbox"
          //   style={{ `border-color: ${(props) => getColor(props)}`
          // }}
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" className="btn" onClick={open}>
            Click to select file
          </button>
        </div>
      </section>
      {lists.length > 1 && (
        <aside>
          <h4>Images</h4>
          <p>{lists}</p>
        </aside>
      )}
      {/* <button className="upload-btn" onClick={() => uploadFiles()}>Upload Images</button> */}
    </>
  );
};
export default DropBox;
