import { useState } from "react"
import Icon from "../image/Icon"

const Select = ({ options, className, name, valueHandlerFn, onChangeHandlerFn }) => {
    const [isOptionOpen, setIsOptionOpen] = useState(false)
    const [optionSelcted, setOptionSelcted] = useState(options[0])

    const optionSelectHandlerFn = (item) => {
        setIsOptionOpen((state) => !state)
        setOptionSelcted(item)
    }
    return (
        <div className="select-input-container">
            <div className="input"  onClick={() => setIsOptionOpen((state) => !state)}>
                <Icon src={optionSelcted.icon}/>
                <h2 className={className}>{optionSelcted.name}</h2>
            </div>

            {isOptionOpen && <div className="options-container">
                {options.map((item, index) => {
                    return (
                        <div onClick={() => optionSelectHandlerFn(item)} className="option">
                            <Icon src={item.icon}/>
                            <p key={"option_" + index} className={className}>{item.name}</p>
                        </div>)
                }
            )}


            </div>}
        </div>
    )
}

export default Select