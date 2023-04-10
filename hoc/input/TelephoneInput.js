import { CountryCode } from "@/utils/country-code"
import { useState } from "react"

const TelephoneInput = ({ label }) => {

  const [isOptionOpen, setIsOptionOpen] = useState(false)
  const [optionSelcted, setOptionSelcted] = useState(CountryCode[0])

  const optionSelectHandlerFn = (item) => {
      setIsOptionOpen((state) => !state)
      setOptionSelcted(item)
  }

  return (
    <div className="telephone-input-outer-container">
      {label && <label htmlFor=""></label>}

      <div className="telephone-input-container">
        <div className="telephone-input-container__country-select" onClick={() => setIsOptionOpen(state => !state)} >
          <h2>{optionSelcted.code}</h2>
          <h2>{optionSelcted.dial_code}</h2>
        </div>
        <input type="text" className="telephone-input-container__telephone-input"
        // value={8795675599}
        // onChange={(e) => set(e.target.value)}
        />


      </div>

      {isOptionOpen && <div className="options-container">
        {CountryCode.map((item, index) => {
          return (
            <div className="option" onClick={() => optionSelectHandlerFn(item)} key={"option_dial_code_"+index}>
              <p>{item.name}</p>
              <p>{item.dial_code}</p>
            </div>)
        }
        )}
      </div>}

    </div>
  )
}

export default TelephoneInput