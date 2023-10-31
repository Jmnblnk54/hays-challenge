import { useCallback, useState } from "react";
import ShowFile from "../showFile/ShowFile";
import DropBox from "../dropBox/DropBox";

const FileDrop = () => {
  const [files, setFiles] = useState([]);

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

  return (
    <div className="container">
      <DropBox {...{ onDrop }} />
      <ShowFile {...{ files }} />
    </div>
  );
};

export default FileDrop;
