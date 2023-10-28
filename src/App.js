import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import UploadModal from "./components/uploadModal/UploadModal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <div className="button-container">
        <Button onClick={openModal}>UPLOAD</Button>
      </div>
      <UploadModal {...{ modalOpen, closeModal }} />
    </div>
  );
};

export default App;
