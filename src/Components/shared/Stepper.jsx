import React from "react";
import { useSelector } from "react-redux";
import "../../shared/Stepper.css";

const Stepper = () => {
  const step = useSelector((state) => state?.multiStepState?.step);

  return (
    <div className={`stepper-wrapper-horizontal`}>
      {Array(2)
        .fill(0)
        .map((item, idx) => (
          <div className="step-wrapper" key={idx}>
            <div
              className={`step-number step-number-${
                step == idx + 1 ? "active" : "disabled"
              }`}
            >
              {(step > idx + 1) ? "✔" : idx + 1}
            </div>
            {idx + 1 !== 2 && <div className={`divider-line divider-line-2`} />}
          </div>
        ))}
    </div>
  );
};

export default Stepper;
