import { navigateToPage } from '@/utils/navigate/navigator'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='menu-drawer-container'>
      <div>
        <div className="sign-button">
          {!true ? (
            <>
              <Link href={navigateToPage("register")}>
                <button className="btn-link">Register</button>
              </Link>
              <p>or</p>
              <Link href={navigateToPage("login")}>
                <button className="btn-link">Login</button>
              </Link>
            </>
          ) : (
            <>
              <Link href={navigateToPage("listings")}>
                <button className="btn-link">Abhinay Singh</button>
              </Link>
            </>
          )}
        </div>
        <div className="post-new-ad">
          <Link href={navigateToPage("new-ad")}>
            <button className="btn w-100">POST FREE ADS</button>
          </Link>
        </div>
      </div>
      <div>
        <button className='btn-link w-100 mt-1'>Share AdZone</button>
      </div>
    </div>
  )
}

export default Menu