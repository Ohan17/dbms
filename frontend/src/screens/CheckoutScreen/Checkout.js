import React, { useEffect, useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm/AddressForm";
import Review from "./ReviewForm/ReviewForm";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import PaypalIntegreation from "./PaypalIntegration/PaypalIntegreation";
import Context from "../../store/ContextProvider";
const steps = ["Shipping address", "Review your order", "Payment"];

export default function Checkout() {
  const ctx = useContext(Context);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [contact, setContact] = useState({ email: "", phone1: "", phone2: "" });
  const [address, setAddress] = useState({
    address: "",
    city: "",
    country: "",
  });
  const [check, setCheck] = useState(false);
  const [isValidForm, setIsVaLidForm] = useState(false);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (ctx.isLoggedIn) {
      setContact({
        email: ctx.info.email,
        phone1: contact.phone1,
        phone2: contact.phone2,
      });
    }
  }, ctx.isLoggedIn);

  useEffect(() => {
    if (
      name.lastName.length > 0 &&
      name.firstName.length > 0 &&
      contact.email.includes("@") &&
      !isNaN(parseInt(contact.phone1)) &&
      contact.phone1.length === 10 &&
      address.address.length > 0 &&
      address.country.length > 0
    ) {
      if (
        contact.phone2.length === 0 ||
        (contact.phone2.length === 10 && !isNaN(parseInt(contact.phone2)))
      ) {
        setIsVaLidForm(true);
      } else {
        setIsVaLidForm(false);
      }
    } else {
      setIsVaLidForm(false);
    }
  }, [name, contact, address]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            name={name}
            setName={setName}
            contact={contact}
            setContact={setContact}
            address={address}
            setAddress={setAddress}
            check={check}
            setCheck={setCheck}
          />
        );
      case 1:
        return (
          <Review
            name={name}
            contact={contact}
            address={address}
            check={check}
            setTotal={setTotal}
            cart={ctx.cart}
          />
        );
      case 2:
        return <PaypalIntegreation total={total} />;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography  variant="h5" align="center" color="primary ">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {getStepContent(activeStep)}
          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>
            )}

            {activeStep === steps.length - 1 ? (
              <div />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={!isValidForm}
              >
                Next
              </Button>
            )}
          </div>
        </React.Fragment>
      </Paper>
    </Container>
  );
}
