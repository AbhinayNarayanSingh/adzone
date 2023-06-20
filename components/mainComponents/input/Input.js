import React, { useState } from "react";
import Select from "./Select";
import Icon from "../image/Icon";
import TelephoneInput from "./TelephoneInput";
import { HIDE_PASSWORD_ICON, SHOW_PASSWORD_ICON } from "@/Environment";

const Input = (props) => {
  const {
    changeHandler=() => {}, 
    value, 
    formFeild : { type, label, name="", helpText, className, jsx, optionsFilterHandler, options, optionJsxType="", button=[]}
  } = props

  const [showPassword, setShowPassword] = useState(false)

  const [isSelectSearchOptionOpen, setIsSelectSearchOptionOpen] = useState(false)

  const optionJsxFn = (selectType, option, index) => {
    switch (selectType) {
      case "CATEGORY_SELECT":
        return (<>
          <Icon src={option.icon} />
          <p className={className}>
            {option.name}
          </p>
        </>)
      default:
        return (<h2 key={"predictions__" + index}>{option.formatted_address}</h2>)
    }
  } 

  switch (type) {
    case "static":
      return <div className={className + " static-text"} key={type + "_input_" + name}>{jsx}</div>;

    case "checkbox" : 
    return (
      <div className="checkbox-form-feild" >
        <input type="checkbox" name={name} id={"checkbox__" + name} />
        <label htmlFor={"checkbox__" + name}>{label}</label>
      </div>)

    case "button":
      return (
        <div  key={type + "_input_" + name}>
          <button type="submit" className={`btn ${className}`}>
            {label}
          </button>
        </div>
      );

    case "email":
      return (
        <div className="form-feild"  key={type + "_input_" + name}>
          <label htmlFor="">{label}</label>
          <input value={value?.[name]} onChange={(e) => changeHandler(e)} type="text" name={name} id={"email__" + name} />
          {helpText && <p className="help-text">{helpText}</p>}
        </div>
      );

    case "password":
      return (
        <div className="form-feild"  key={type + "_input_" + name}>
          <label htmlFor="">{label}</label>
          <div className="password-input-outer-container">
            <input value={value?.[name]} onChange={(e) => changeHandler(e)} type={showPassword ? "text" : "password"} name={name} id={"password__" + name} className="password-input"/>
            <span onClick={() => setShowPassword((state) => !state)}>
              {showPassword ? <Icon src={SHOW_PASSWORD_ICON} alt="show" size={"1.25rem"}/> :
              <Icon src={HIDE_PASSWORD_ICON} alt="hide" size={"1.25rem"}/>}
            </span>
          </div>
          {helpText && <p className="help-text">{helpText}</p>}
        </div>
      );
    
    case "select" : 
      return <Select {...props}/>

    case "selectSearch" : 
      return (
        <div className="form-feild">
        <label htmlFor="">{label}</label>
        <div className="select-input-container">
          <input 
            onChange={(e) => {
              changeHandler(e)
              setIsSelectSearchOptionOpen(true)
            }} 
            type="text" 
            name={name} 
            value={value?.[name]} 
          />

          {(isSelectSearchOptionOpen && options?.[0]) && (
            <div className="options-container">
              {options.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setIsSelectSearchOptionOpen(false)
                      optionsFilterHandler(item.place_id)}}
                    className="option"
                    key={"_optionType_" + index}
                  >
                    {optionJsxFn(optionJsxType, item, index)}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        </div>
        )

    case "button-group" : 
      return <div key={type + "_input_" + name} className="button-group">
        {button.map((btn, index) => {
          return <button type="submit" className={`btn ${btn.className}`} key={type + "_input_" + index + "_index_"+ name}>
            {btn.label}
          </button>
        })}
        
      </div>

    case "phone" : 
        return <TelephoneInput {...props}/>

    default:
      return (
        <div className="form-feild" key={type + "_input_" + name}>
          <label htmlFor="">{label}</label>
          <input value={value?.[name]} onChange={(e) => changeHandler(e)} type="text" name={name} />
          {helpText && <p className="help-text">{helpText}</p>}
        </div>
      );
  }
};

export default Input;
