import { useDispatch, useSelector } from "react-redux";
import CentreRectangle from "../shared/CentreRectangle";
import LogoHeader from "./shared/LogoHeader";
import InputField from "../shared/inputField";
import { updateFormData } from "../ReduxStore/Slices/ProviderWorkInfo/providerWorkInfoSlice";
import ButtonTypeOne from "./shared/ButtonTypeOne";
import "../styles/ProviderWorkInfo/provider-workinfo.css";
import Stepper from "./shared/Stepper";

const ProviderWorkInfo = () => {
  const workInformationData = useSelector((state) => {
    return state?.providerWorkInfoState?.workInformation;
  });
  const dispatch = useDispatch();

  const handleFormData = (e) => {
    let { name, value } = e?.target;
    if (
      e?.target?.type == "checkbox" &&
      e?.target?.name == "noSecondaryFacility"
    ) {
      let currentData = {};
      if (e?.target?.checked) {
        currentData = {
          ...workInformationData,
          noSecondaryFacility: true,
          secondaryFacility: "",
          additionalFacilities: [],
        };
        dispatch(updateFormData(currentData));
      } else {
        dispatch(
          updateFormData({
            ...workInformationData,
            [name]: e?.target?.checked,
          })
        );
      }
    } else {
      dispatch(
        updateFormData({
          ...workInformationData,
          [name]: value,
        })
      );
    }
  };

  const handleAddFacility = () => {
    dispatch(
      updateFormData({
        ...workInformationData,
        additionalFacilities: [
          ...workInformationData?.additionalFacilities,
          "",
        ],
      })
    );
  };

  const handleAdditionalFacilityChange = (event, index) => {
    const { value } = event?.target;
    const updatedFacilities = [...workInformationData?.additionalFacilities];
    updatedFacilities[index] = value;
    dispatch(
      updateFormData({
        ...workInformationData,
        additionalFacilities: [...updatedFacilities],
      })
    );
  };

  const handleWorkInformation = () => {};

  return (
    <>
      <div className={"provider-workinfo"}>
        <LogoHeader />
        <CentreRectangle className="center-rectangle provider-workinfo__center-rectangle">
          <div className={`content-holder`}>
            <Stepper />
            <div className={"header-text"}>Doctor Work Information</div>
            <div className={"provider-workinfo__input--container"}>
              <InputField
                className="provider-workinfo__input"
                value={workInformationData?.primaryFacility}
                placeholder="Primary Facility"
                onChangeEvent={handleFormData}
                name="primaryFacility"
              />
              <label>
                <InputField
                  type="checkbox"
                  checked={workInformationData?.noSecondaryFacility}
                  onChangeEvent={handleFormData}
                  name="noSecondaryFacility"
                />
                Don't have secondary facility
              </label>
              {!workInformationData?.noSecondaryFacility && (
                <InputField
                  className="provider-workinfo__input"
                  value={workInformationData?.secondaryFacility}
                  placeholder="Secondary Facility"
                  onChangeEvent={handleFormData}
                  name="secondaryFacility"
                />
              )}
              {!workInformationData?.noSecondaryFacility &&
                workInformationData?.additionalFacilities?.map(
                  (facility, index) => (
                    <InputField
                      key={index}
                      className="provider-workinfo__input"
                      value={facility}
                      placeholder="Additional Facility"
                      onChangeEvent={(e) =>
                        handleAdditionalFacilityChange(e, index)
                      }
                    />
                  )
                )}
              {!workInformationData?.noSecondaryFacility && (
                <ButtonTypeOne
                  onClick={handleAddFacility}
                  classname={"button-style"}
                  text={"Add More"}
                />
              )}
              <ButtonTypeOne
                onClick={handleWorkInformation}
                text={"Submit"}
                classname={"button-style"}
              />
            </div>
          </div>
        </CentreRectangle>
      </div>
    </>
  );
};

export default ProviderWorkInfo;
