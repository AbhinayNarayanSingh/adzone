import { useEffect, useState } from "react";
import Icon from "@/componentWrapper/image/Icon";

const Select = ({
  options,
  className,
  name="select",
  changeHandler,
}) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [optionSelcted, setOptionSelcted] = useState(options[0] || {});
  
  const optionSelectHandlerFn = (item) => {
    setIsOptionOpen((state) => !state);
    setOptionSelcted(item);
    changeHandler({ target :
      {
        name : name,
        value : item
      }}
    )
  };

  const optionJsxFn = (selectType, item, index) => {
    switch (selectType) {
      case "CATEGORY_SELECT":
        return (<>
          <Icon src={item.icon} />
          <p key={"option_" + index} className={className}>
            {item.name}
          </p>
        </>)
      default:
        break;
    }
  } 
  return (
    <div className="select-input-container">
      <div className="input" onClick={() => setIsOptionOpen((state) => !state)}>
        <Icon src={optionSelcted.icon} />
        <h2 className={className}>{optionSelcted.name}</h2>
      </div>

      {isOptionOpen && (
        <div className="options-container">
          {options.map((item, index) => {
            let selectOptionType = "CATEGORY_SELECT"
            return (
              <div
                onClick={() => optionSelectHandlerFn(item)}
                className="option"
                key={selectOptionType + "_optionType_" + index}

              >
                {optionJsxFn(selectOptionType, item, index)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
