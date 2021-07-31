import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./GameEndModal.css";

function GameEndModal() {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <div>
        <Modal isOpen={open} toggle={toggle}
          className="result-modal">
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody className="text-center">
            <h3 className="GameEndModal-header">header</h3>
            <p>bmo pic here prob</p>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default GameEndModal;