import { useCallback, useState, useEffect } from "react";
import ShowFile from "../showFile/ShowFile";
import DropBox from "../dropBox/DropBox";

const FileDrop = ({ handleGetFiles }) => {
  const [files, setFiles] = useState([]);
  console.log(files);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setFiles((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  useEffect(() => {
    handleGetFiles(files);
  }, [files]);

  return (
    <div className="container">
      <DropBox {...{ onDrop }} />
      {/* <ShowFile {...{ files }} /> */}
    </div>
  );
};

export default FileDrop;
