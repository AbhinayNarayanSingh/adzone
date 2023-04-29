import React from 'react'

const SettingPage = () => {
  return (
    <div className="main-section-outer-container min-body-section-container setting-page-outer-container">
      <div className="col-30">
        <button className='btn-link'>Personal details</button>
        <button className='btn-link'>Billing address</button>
        <button className='btn-link'>Switch to professinal</button>
        <button className='btn-link'>Change Password</button>
        <button className='btn-link'>Terms & Condition</button>
        <button className='btn-link'>Privacy policy</button>
      </div>
      <div className="col-70">70</div>
    </div>
  )
}

export default SettingPage