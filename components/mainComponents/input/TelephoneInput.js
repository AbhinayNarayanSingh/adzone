import ClickAwayWrapper from "@/hoc/dialog/ClickAwayWrapper";
import { CountryCode } from "@/utils/country-code";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TelephoneInput = (props) => {
  let name = "phone"
  let code = "country_code"
  const {
    changeHandler = () => { },
    value,
    formFeild: { label = props.label || "", helpText, className, } } = props

  const { origin } = useSelector(state => state.config)

  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [optionSelcted, setOptionSelcted] = useState(origin);


  const optionSelectHandlerFn = (item) => {
    setIsOptionOpen((state) => !state);
    setOptionSelcted(item);
    changeHandler({
      target: {
        name: code,
        value: item.dial_code
      }
    })
  };

  const closeOption = () => {
    setIsOptionOpen(false)
  }

  useEffect(() => {
    if (value?.[code]) {

      // linear search
      for (let i = 0; i < CountryCode.length; i++) {
        const element = CountryCode[i];
        if (element.dial_code == value?.[code]) {
          setOptionSelcted(element)
          break;
        }
      }


    }


  }, [])

  const inputChangeHandler = (e) => {

    changeHandler(e)
    
    if (value[code] !== optionSelcted.dial_code) {
      changeHandler({
        target: {
          name: code,
          value: optionSelcted.dial_code
        }
      })
    }

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
            value={value?.[name]}
            onChange={inputChangeHandler}
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
