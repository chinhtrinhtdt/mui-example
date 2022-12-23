import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Paper } from "@mui/material";
import FinishOrder from "./components/FinishOrder";
import PaymentDetails from "./components/PaymentDetails";
import ReviewOrder from "./components/ReviewOrder";
import ShippingAdrdress from "./components/ShippingAdrdress";
import { useState } from "react";

const steps = ["Shipping address", "Payment details", "Review your code"];

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const renderCheckoutStep = () => {
    if (activeStep === 0) {
      return <ShippingAdrdress />;
    }
    if (activeStep === 1) {
      return <PaymentDetails />;
    }
    if (activeStep === 2) {
      return <ReviewOrder />;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: "100px", mb: 5 }}>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ mb: 3, textAlign: "center" }}
        >
          Checkout
        </Typography>

        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton>{label}</StepButton>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h6" component="div" sx={{ mt: 3 }}>
          <strong>
            {activeStep === 0 && steps[0]}
            {activeStep === 1 && steps[1]}
            {activeStep === 2 && steps[2]}
          </strong>
        </Typography>

        {allStepsCompleted() ? (
          <FinishOrder />
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {renderCheckoutStep()}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleComplete} variant="contained">
                {completedSteps() === totalSteps() - 1 ? "Place order" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Checkout;
