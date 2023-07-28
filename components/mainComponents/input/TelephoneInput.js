import ClickAwayWrapper from "@/hoc/dialog/ClickAwayWrapper";
import { CountryCode } from "@/utils/country-code";
import { useEffect, useState } from "react";

const TelephoneInput = (props) => {
  const {
    changeHandler=() => {}, 
    value, 
    formFeild : { label=props.label, name="", helpText, className,} } = props

  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [optionSelcted, setOptionSelcted] = useState({
    name: "India",
    dial_code: "+91",
    code: "IN",
  });
  

  const optionSelectHandlerFn = (item) => {
    setIsOptionOpen((state) => !state);
    setOptionSelcted(item);
    changeHandler({
      target :{
      name : "country",
      value : item
    }})
  };

  const closeOption = () => {
    setIsOptionOpen(false)
  }

  useEffect(() => {
    if (value?.country) {
      setOptionSelcted(value?.country)
    } else {
      changeHandler({
        target :{
        name : "country",
        value : optionSelcted
      }})
    }
  },[])

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
            value={value?.[name]} 
            onChange={(e) => changeHandler(e)}
            name={name}
          />
        </div>
        {helpText && <p className="help-text">{helpText}</p>}



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
