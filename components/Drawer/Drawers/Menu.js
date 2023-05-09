import Link from 'next/link'

import { navigateToPage } from '@/utils/navigate/navigator'
import { isLoggedIn } from '@/hoc/OAuth/authHelper'
import Icon from '@/hoc/image/Icon'
import { MAP_ICON, SETTING_ICON } from '@/Environment'

const Menu = () => {
  const isUserLoggedIn = isLoggedIn()

  const commonDrawerMenu = [
    {
      name : "Privacy & Policy",
      icon : SETTING_ICON,
      navigateTo : navigateToPage()
    },
    {
      name : "Terms & Condition",
      icon : SETTING_ICON,
      navigateTo : navigateToPage()
    },
    {
      name : "FAQs",
      icon : SETTING_ICON,
      navigateTo : navigateToPage()
    },
    {
      name : "Help",
      icon : SETTING_ICON,
      navigateTo : navigateToPage()
    },
    {
      name : "Sitemap",
      icon : SETTING_ICON,
      navigateTo : navigateToPage()
    },
  ]

  const authDrawerMenu = [
    {
      name : "My Profile",
      icon : SETTING_ICON,
      navigateTo : navigateToPage("listings")
    },
    {
      name : "My Orders",
      icon : SETTING_ICON,
      navigateTo : navigateToPage("orders")
    },
    {
      name : "Messages",
      icon : SETTING_ICON,
      navigateTo : navigateToPage("messages")
    },
    {
      name : "Account Settings",
      icon : SETTING_ICON,
      navigateTo : navigateToPage("setting")
    },
  ]

  const optionDrawerMenu = [
    {
      name : "Language : ES",
      icon : SETTING_ICON,
      action : () => {}
    },
    {
      name : "London, Ontario",
      icon : MAP_ICON,
      action : () => {}
    }
  ]


  return (
    <div className='menu-drawer-container'>
      {isUserLoggedIn ? (
        <Link href={navigateToPage("listings")}>
          <button className="drawer-profile-card">
            <div className='user-profile-first-letter'>A</div>
            <div className='user-details'>
              <h2>Abhinay Narayan Singh</h2>
              <p>abhi8795675599@gmail.com</p>
            </div>
          </button>
        </Link>
      ) : (
        <div className="sign-button">
          <Link href={navigateToPage("register")}>
            <button className="btn-link">Register</button>
          </Link>
          <p>or</p>
          <Link href={navigateToPage("login")}>
            <button className="btn-link">Login</button>
          </Link>
        </div>
      )}

      <div className="post-new-ad">
        <Link href={navigateToPage("newAds")}>
          <button className="btn w-100">POST FREE ADS</button>
        </Link>
      </div>

      <div className='menu-option-button'>
        {isUserLoggedIn && authDrawerMenu.map((menu, index) => {
          return (
            <Link href={menu.navigateTo} key={"auth_menu_" + index}>
              <button className="btn-link-icon">
                <Icon src={menu.icon}/>
                {menu.name}
              </button>
            </Link>
          )
        })}

        <span className='menu-drawer-divider'></span>

        {optionDrawerMenu.map((menu, index) => {
          return (
            <button className="btn-link-icon" key={"option_menu_" + index}>
              <Icon src={menu.icon}/>
              {menu.name}
            </button>
          )
        })}


        <span className='menu-drawer-divider'></span>

        {commonDrawerMenu.map((menu, index) => {
          return (
            <Link href={menu.navigateTo} key={"common_menu_" + index}>
              <button className="btn-link-icon">
                <Icon src={menu.icon}/>
                {menu.name}
              </button>
            </Link>
          )
        })}

      </div>

      <div>
        <button className='btn-link w-100 mt-1'>Share AdZone</button>
      </div>
    </div>
  )
}

export default Menu