import { LOGO, MAP_ICON } from '@/Environment'
import Icon from '../image/Icon'
import Link from 'next/link'
import { open_dialog } from '@/utils/rxjs/rxHelper'


const Navbar = () => {
  return (
    <div className='navbar-outer-container'>

      <div className='navbar-container'>
        <div className="navbar-left-col">
          <Link href="/">
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
            <Link href="/register">
              <button className='btn-link'>Register</button>
            </Link>
            <p>or</p>
            <Link href="/login">
              <button className='btn-link'>Login</button>
            </Link>
          </div>
          <button className='btn'>POST FREE ADS</button>
        </div>
      </div>

      <span className='navbar-fill-span' />

      <div className="search-input-outer-container">
        <form action="" className="search-input-container">
          <input type="text" placeholder='What are you looking for?'/>
          <div className="category-container">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRibzIXsJKGzJpuACO4cxMZh8BYuZdd87_A&usqp=CAU" alt="" /> */}
            
            <p>Commercial Vehicle & Spare</p>
          </div>
          <button>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Navbar