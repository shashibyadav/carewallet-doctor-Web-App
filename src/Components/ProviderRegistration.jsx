import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CentreRectangle from "../shared/CentreRectangle";
import LogoHeader from "./shared/LogoHeader";
import InputField from "../shared/inputField";
import ButtonTypeOne from "./shared/ButtonTypeOne";
import Modal from "./shared/Modal";

import { updateFormData } from "../ReduxStore/Slices/ProviderRegistration/providerRegistrationSlice";

import "../styles/provider-registration/provider-registration.css";
import Dropdown from "../shared/Dropdown";
import { setStep } from "../ReduxStore/Slices/MultiStepProviderRegistration/multiStepSlice";
import Stepper from "./shared/Stepper";

const ProviderRegistration = () => {
  const registrationData = useSelector((state) => {
    return state.providerRegistrationState.registrationForm;
  });
  const step = useSelector((state) => state?.multiStepState?.step);
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFormData = (e) => {
    let { name, value } = e?.target;
    if (
      e?.target?.type == "checkbox" &&
      e?.target?.name == "noSecondaryPhone"
    ) {
      dispatch(
        updateFormData({
          ...registrationData,
          [name]: e?.target?.checked,
          secondaryPhone: e?.target?.checked ? "" : registrationData?.secondaryPhone 
        })
      );
    } else {
      dispatch(
        updateFormData({
          ...registrationData,
          [name]: value,
        })
      );
    }
  };

  const handleRegistration = () => {
    setVerificationCode(['', '', '', '']);
    openModal();
  };

  const handleVerificationInputChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
    if (index < 3 && value !== "") {
      inputRefs[index + 1]?.current?.focus();
    }
    if (!newVerificationCode?.some((item) => item == "")) {
      dispatch(setStep(step + 1));
    }
  };

  const sendVerificationCode = () => {
    // TODO: functionality has to be implemented during api integration
  };

  return (
    <>
      <div className={"provider-registration"}>
        <LogoHeader />
        <CentreRectangle className="provider-registration__center-rectangle">
          <div className={`content-holder`}>
            <Stepper />
            <div className={"header-text"}>Doctor Registration</div>
            <div className={"provider-registration__input--container"}>
              <Dropdown
                name="title"
                options={["Physician", "Surgeon", "Cardiologist"]}
                onSelect={handleFormData}
                className={"provider-registration__dropdown"}
              />
              <InputField
                className="provider-registration__input"
                value={registrationData?.firstName}
                placeholder="First Name"
                onChangeEvent={handleFormData}
                name="firstName"
              />

              <InputField
                className="provider-registration__input"
                value={registrationData?.lastName}
                placeholder="Last Name"
                onChangeEvent={handleFormData}
                name="lastName"
              />
              <InputField
                className="provider-registration__input"
                value={registrationData?.npi}
                placeholder="NPI"
                onChangeEvent={handleFormData}
                name="npi"
                type="number"
              />
              <InputField
                className="provider-registration__input"
                value={registrationData?.primaryPhone}
                placeholder="Primary Phone"
                onChangeEvent={handleFormData}
                name="primaryPhone"
                type="number"
              />
              <label>
                <InputField
                  type="checkbox"
                  checked={registrationData?.noSecondaryPhone}
                  onChangeEvent={handleFormData}
                  name="noSecondaryPhone"
                />
                Don't have secondary phone
              </label>
              {!registrationData?.noSecondaryPhone && (
                <InputField
                  className="provider-registration__input"
                  value={registrationData?.secondaryPhone}
                  placeholder="Secondary Phone"
                  onChangeEvent={handleFormData}
                  name="secondaryPhone"
                  type="number"
                />
              )}
              <InputField
                className="provider-registration__input"
                value={registrationData?.primaryEmail}
                placeholder="Primary Email"
                onChangeEvent={handleFormData}
                name="primaryEmail"
                type="email"
              />
              <InputField
                className="provider-registration__input"
                value={registrationData?.secondaryEmail}
                placeholder="Secondary Email"
                onChangeEvent={handleFormData}
                name="secondaryEmail"
                type="email"
              />
               <InputField
                className="provider-registration__input"
                value={registrationData?.password}
                placeholder="Password"
                onChangeEvent={handleFormData}
                name="password"
                type="password"
              />
               <InputField
                className="provider-registration__input"
                value={registrationData?.confirmPassword}
                placeholder="Confirm Password"
                onChangeEvent={handleFormData}
                name="confirmPassword"
                type="password"
              />
            </div>
            <textarea
              value={registrationData?.personalAddress}
              placeholder="Personal Address"
              onChange={handleFormData}
              rows={4}
              cols={50}
              className="provider-registration__input provider-registration__input--address"
              name="personalAddress"
            />
            <ButtonTypeOne
              onClick={handleRegistration}
              text={"Sign Up"}
              classname={"button-style provider-registration__cta"}
            />
          </div>
        </CentreRectangle>
        {modalIsOpen && (
          <Modal isOpen={modalIsOpen} onClose={closeModal} customClass="provider-registration__modal">
            <div className="provider-registration__verification">
              <h2>Verification Code</h2>
              <p>Code sent to your email address</p>
              <div className="provider-registration__verification-container">
                {verificationCode?.map((digit, index) => (
                  <InputField
                    className={`provider-registration__verification__input ${verificationCode[index]!== "" ? "provider-registration__verification__active" : ""}`}
                    ref={inputRefs[index]}
                    value={digit}
                    type="number"
                    maxLength="1"
                    onChangeEvent={(e) =>
                      handleVerificationInputChange(index, e?.target?.value)
                    }
                    key={index}
                  />
                ))}
              </div>
              <p>
                Didn't receive the code?{" "}
                <a onClick={sendVerificationCode}>Resend</a>
              </p>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default ProviderRegistration;
