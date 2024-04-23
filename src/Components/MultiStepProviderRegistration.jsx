import React from "react";
import { useSelector } from "react-redux";
import ProviderRegistration from "./ProviderRegistration";
import ProviderWorkInfo from "./ProviderWorkInfo";

const MultiStepProviderRegistration = () => {
  const step = useSelector((state) => state?.multiStepState?.step);

  return (
    <div>
      {step === 1 && <ProviderRegistration />}
      {step === 2 && <ProviderWorkInfo />}
    </div>
  );
};

export default MultiStepProviderRegistration;
