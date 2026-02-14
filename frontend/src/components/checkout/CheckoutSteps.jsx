import "./CheckoutSteps.css";

const defaultSteps = ["Address", "Delivery", "Review", "Payment"];

export default function CheckoutSteps({
  steps = defaultSteps,
  currentStep = 1,
  onStepChange,
}) {
  return (
    <nav className="checkoutsteps" aria-label="Checkout progress">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const state =
          stepNumber < currentStep ? "done" : stepNumber === currentStep ? "active" : "idle";

        return (
          <button
            key={step}
            type="button"
            className={`checkoutstep ${state}`}
            onClick={() => onStepChange?.(stepNumber)}
          >
            <span>{stepNumber}</span>
            <strong>{step}</strong>
          </button>
        );
      })}
    </nav>
  );
}
