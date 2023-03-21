import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
// import useValidation from "../../hooks/use-validation"

const Checkout = (props) => {
  const [validity, setValidity] = useState({
    nameInput: true,
    streetInput: true,
    postalInput: true,
    cityInput: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const isValid = (input) => {
    return input.trim().length > 0;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !isValid(nameInput.current.value) ||
      !isValid(streetInput.current.value) ||
      !isValid(postalInput.current.value) ||
      postalInput.current.value.trim().length !== 5 ||
      !isValid(cityInput.current.value)
    ) {
      setValidity({
        nameInput: isValid(nameInput.current.value),
        streetInput: isValid(streetInput.current.value),
        postalInput:
          isValid(postalInput.current.value) &&
          postalInput.current.value.trim().length === 5,
        cityInput: isValid(cityInput.current.value),
      });
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!validity.nameInput && <p style={{ color: "red" }}>Invalid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!validity.streetInput && (
          <p style={{ color: "red" }}>Invalid street</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInput} />
        {!validity.postalInput && (
          <p style={{ color: "red" }}>Invalid postal code</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!validity.cityInput && <p style={{ color: "red" }}>Invalid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.hideForm}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
