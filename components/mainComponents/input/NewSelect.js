import ClickAwayWrapper from "@/hoc/dialog/ClickAwayWrapper";
import { useEffect, useState } from "react";

const NewSelect = ({
    options,      // options should be an array of Object [{ value: "", jsx : <h2></h2>  }, {...}] 
    className = "",
    name = "select",
    changeHandler=() => {},
    value
}) => {
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [optionSelcted, setOptionSelcted] = useState();

    const closeoptionDropdown = () => setIsOptionOpen(false);

    const optionSelectHandlerFn = (item) => {
        closeoptionDropdown()
        setOptionSelcted(item);
        
        changeHandler({
            target:
            {
                name: name,
                value: item?.value
            }
        }
        )
    };

    useEffect(() => {
        // find out which cat is that
        optionSelectHandlerFn(value?.jsx ? value : options?.[0] || {})
    }, [])


    return (
        <div className={" select-input-container"}>
            <ClickAwayWrapper onClickAway={closeoptionDropdown}>
                <div
                    className="input"
                    onClick={() => setIsOptionOpen((state) => !state)}
                >
                    {optionSelcted?.jsx}
                </div>

                {isOptionOpen && (
                    <div className={className + " options-container"}>
                        {options?.[0] && options.map((item, index) => {
                            return (
                                <div
                                    onClick={() => optionSelectHandlerFn(item)}
                                    className="option"
                                    key={"selectOption__" + index}
                                >
                                    {item.jsx}
                                </div>
                            );
                        })}
                    </div>
                )}
            </ClickAwayWrapper>
        </div>
    );
};

export default NewSelect;
