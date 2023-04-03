import React from 'react'

const Input = ({ formFeild: { type, label, name, helpText, className } }) => {
    switch (type) {
        case "button" :
            return (
                <div>
                    <button type='submit' className={`btn ${className}`}>{label}</button>
                </div>
            )
        case "email":
            return (<div className='form-feild'>
                <label htmlFor="">{label}</label>
                <input type="text" name={name} id="" />
                {helpText && <p className='help-text'>{helpText}</p>}
            </div>)

        case "password":
            return (<div className='form-feild'>
                <label htmlFor="">{label}</label>
                <input type="password" name={name} id="" />
                {helpText && <p className='help-text'>{helpText}</p>}
            </div>)

        default:
            return (<div className='form-feild'>
                <label htmlFor="">{label}</label>
                <input type="text" name={name} />
                {helpText && <p className='help-text'>{helpText}</p>}
            </div>)
    }
}

export default Input