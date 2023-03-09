import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../context/ cart-context";

import classes from "./Modal.module.css";

const Backdrop = () => {
    const ctx = useContext(CartContext);
  return <div className={classes.backdrop} onClick={ctx.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {" "}
      <div className={classes.content}>{props.children}</div>{" "}
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("backdrop-modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
