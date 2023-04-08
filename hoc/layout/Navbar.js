import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

import { open_dialog } from '@/utils/rxjs/rxHelper'

import Icon from '../image/Icon'
import { LOGO, MAP_ICON, SETTING_ICON } from '@/Environment'
import { navigateToPage, navigateToSearch } from '@/utils/navigate/navigator'

const Navbar = () => {
  const router = useRouter()
  const {page, section} = router.query
  const [searchString, setSearchString] = useState("")
  const [isSuggetionsBoxOpen, setIsSuggetionsBoxOpen] = useState(false)

  const searchHandlerFn = (event) => {
    event.preventDefault()
    router.push(navigateToSearch(searchString))
    setSearchString("")
  }
  
  return (
    <div className='navbar-outer-container'>

      <div className='navbar-container'>
        <div className="navbar-left-col">
          <Link href={navigateToPage()}>
            <img src={LOGO} className="logo" />
          </Link>

          <div className="location-button-container" onClick={() => open_dialog()}>
            <Icon src={MAP_ICON}/>
            <button className='btn-link pl-05'>
              London, Ontario
            </button>
          </div>
        </div>

        <div className='navbar-right-col'>
          <button className='btn-link'>ES</button>
          <div className='sign-button'>
            {!true ? 
            <>
              <Link href={navigateToPage("register")}>
                <button className='btn-link'>Register</button>
              </Link>
              <p>or</p>
              <Link href={navigateToPage("login")}>
                <button className='btn-link'>Login</button>
              </Link>
            </> : 
            <>
              <Link href={navigateToPage("profile")}>
                <button className='btn-link'>Abhinay Narayan Singh</button>
              </Link>
            </>}
          </div>
          <Link href={navigateToPage("new-ad")}>
            <button className='btn'>POST FREE ADS</button>
          </Link>
        </div>
      </div>

      <span className='navbar-fill-span' />

      {false && 
      <div className="search-input-outer-container">
        <form action="" className="search-input-container" onSubmit={searchHandlerFn}>
          <input type="text" placeholder='What are you looking for?' value={searchString} onChange={(e) => setSearchString(e.target.value)}/>
          <button>Search</button>


          {isSuggetionsBoxOpen && <div className="search-suggetions-container">
            {[...Array(10)].map((item) => {return (
              <Link href={navigateToSearch("ford-gt-mustang")}>
                <p className='search-suggetions-container__suggetion'>Ford GT Mustang - <span>Car</span></p>
              </Link>
            )})}
          </div>}

        </form>

      </div>}

      {section && <div className="section-navbar-outer-container">
        <div className="section-navbar-inner-container">
          <div>
            <button>My Profile</button>
            <button>Messages</button>
          </div>

          <button className='active'>
            Account Settings
            <Icon src={SETTING_ICON}/>
          </button>
        </div>
      </div>}
    </div>
  )
}

export default Navbar