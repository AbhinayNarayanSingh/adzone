import ClickAwayWrapper from "@/hoc/dialog/ClickAwayWrapper";
import { CountryCode } from "@/utils/country-code";
import { useState } from "react";

const TelephoneInput = (props) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [optionSelcted, setOptionSelcted] = useState({
    name: "India",
    dial_code: "+91",
    code: "IN",
  });
  
  const label = props.label || props?.formFeild?.label 
  const { formFeild } = props;

  const optionSelectHandlerFn = (item) => {
    setIsOptionOpen((state) => !state);
    setOptionSelcted(item);
  };

  const closeOption = () => {
    setIsOptionOpen(false)
  }

  return (
    <>
      {label && <label className="telephone-input-container__label">{label}</label>}

      <div className="telephone-input-outer-container">

        <div className="telephone-input-container">
          <div
            className="telephone-input-container__country-select"
            onClick={() => setIsOptionOpen((state) => !state)}
          >
            <h2>{optionSelcted.code}</h2>
            <h2>{optionSelcted.dial_code}</h2>
          </div>
          <input
            type="text"
            className="telephone-input-container__telephone-input"
            // value={8795675599}
            // onChange={(e) => set(e.target.value)}
          />
        </div>
        {formFeild?.helpText && <p className="help-text">{formFeild?.helpText}</p>}



        {isOptionOpen && (
          <ClickAwayWrapper onClickAway={closeOption}>
            <div className="options-container">
              {CountryCode.map((item, index) => {
                return (
                  <div
                    className="option"
                    onClick={() => optionSelectHandlerFn(item)}
                    key={"option_dial_code_" + index}
                  >
                    <p>{item.name}</p>
                    <p>{item.dial_code}</p>
                  </div>
                );
              })}
            </div>
          </ClickAwayWrapper>
        )}
      </div>
    </>
  );
};

export default TelephoneInput;
