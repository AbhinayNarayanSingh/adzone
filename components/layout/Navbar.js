import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useSession } from "next-auth/react";

import DrawerHOC from "@/hoc/drawer/drawerHOC";
import DialogHOC from "@/hoc/dialog/DialogHOC";
import useIsMobile from "@/hooks/useIsMobile";
import UseAuth from "@/hooks/useAuth";

import { navigateToPage, navigateToSearch } from "@/utils/navigate/navigator";
import { LOGO, MAP_ICON, MENU_ICON, SETTING_ICON } from "@/Environment";
import Icon from "@/componentWrapper/image/Icon";

const Navbar = (props) => {

  const {validateToken} = UseAuth()
  const {data} = useSession()

  const exceptionObj = {
    "/register" : true,
    "/login" : true,
  }

  const router = useRouter();
  const { page, section } = router.query;
  const [searchString, setSearchString] = useState();
  const [isSuggetionsBoxOpen, setIsSuggetionsBoxOpen] = useState(false);

  const isMobile = useIsMobile();

  const showSearchInput =
    router.route === "/" || router.route.includes("/search");

  const searchHandlerFn = (event) => {
    event.preventDefault();
    router.push(navigateToSearch("Real Estate" || searchString));
    setSearchString("");
  };

  const pageActiveIndicator = (pages) => page === pages ? "active" : ""

  const {isAuth, user} = useSelector((state) => state.auth);

  useEffect(() => {
    validateToken("token", true)
  }, [])


  return (
    <div className="navbar-outer-container">
      <div className="navbar-container">
        <div className="navbar-left-col">
          <Link href={navigateToPage()}>
            <img src={LOGO} className="logo" alt="NAVBAR_LOGO"/>
          </Link>

          {!isMobile && (
            <div
              className="location-button-container"
              onClick={() => {props.open_dialog("CHANGE_LOCATION_DIALOG")}}
            >
              <Icon src={MAP_ICON} />
              <button className="btn-link pl-05">London, Ontario</button>
            </div>
          )}
        </div>

        {!exceptionObj[router?.pathname] && <div className="navbar-right-col">
          {isMobile ? 
          <div className="navbar-menu-icon" onClick={() => props.open_drawer("MENU")}>
            <Icon src={MENU_ICON} alt="menu" />
          </div>  : 
          <>
            <button className="btn-link change-language">ES</button>
            <div className="sign-button">
              {!isAuth ? (
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
                    <button className="btn-link">{user.name}</button>
                  </Link>
                </>
              )}
            </div>
            <div className="post-new-ad">
              <Link href={navigateToPage("newAds")}>
                <button className="btn">POST FREE ADS</button>
              </Link>
            </div>
          </>}
        </div>}
      </div>

      <span className="navbar-fill-span" />

      {showSearchInput && (
        <div className="search-input-outer-container">
          <form
            action=""
            className="search-input-container"
            onSubmit={searchHandlerFn}
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              onClick={() => setIsSuggetionsBoxOpen(true)}
            />
            <button>Search</button>

            {isSuggetionsBoxOpen && (
              <div className="search-suggetions-container">
                {[...Array(10)].map((item, index) => {
                  return (
                    <Link href={navigateToSearch("ford-gt-mustang")} key={"suggetion_" + index}>
                      <p className="search-suggetions-container__suggetion">
                        Ford GT Mustang - <span>Car</span>
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </form>
        </div>
      )}

      {section && (
        <div className="section-navbar-outer-container">
          <div className="section-navbar-inner-container">
            <div>
              <Link href={navigateToPage("listings")}><button className={pageActiveIndicator("p")}>My Profile</button></Link>
              <Link href={navigateToPage("messages")}><button className={pageActiveIndicator("m")}>Messages</button></Link>
              {/* <button>Premium</button> */}
            </div>
            <Link href={navigateToPage("setting")}><button className={`btn-with-icon ${pageActiveIndicator("s")}`}>Account Settings<Icon src={SETTING_ICON} /></button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogHOC(DrawerHOC(Navbar));
