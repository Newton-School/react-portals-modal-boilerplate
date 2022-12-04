import React, { useState} from "react";
import "../styles/App.css";

const Modal = ({ children, closeModal }) => {
  return (children);
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <h1>Click the button below to open the modal</h1>
      <button id="open" className="modal-open" onClick={toggleModal}>
        Open
      </button>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <div id="modal" className="modal">
            <div className="modal-content">
              <h1>Modal</h1>
              <p>This is Modal content</p>
            </div>
            <button id="close" className="modal-close" onClick={toggleModal}>
              X
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
