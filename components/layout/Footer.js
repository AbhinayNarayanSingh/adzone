import { FOOTER_LOGO, PROJECT_DESCRIPTION } from "@/Environment";
import Link from "next/link";
import { navigateToPage } from "@/utils/navigate/navigator"
import { useSelector } from "react-redux";
import UseAuth from "@/hooks/useAuth";

const Footer = () => {
  const footerBtns = [
    {
      label : "Membership",
      navigateTo : "membership" 
    },
    {
      label : "Terms & Condition",
      navigateTo : "credits" 
    },
    {
      label : "Privacy & Policy",
      navigateTo : "terms" 
    },
    {
      label : "FAQ",
      navigateTo : "privacy" 
    },
    {
      label : "Sitemap",
      navigateTo : "faq" 
    },
  ]
  const {logoutHandler} = UseAuth()
  const {isAuth, user} = useSelector((state) => state.auth);

  return (
    <div className="footer-outer-container">
      <div className="footer-brand-container">
        <img src={FOOTER_LOGO} alt="FOOTER_LOGO"/>
        <p>{PROJECT_DESCRIPTION}</p>
      </div>

      <div className="footer-link-container">
        {footerBtns.map(({navigateTo, label}, index) => {
          return (
            <Link href={navigateToPage(navigateTo)} key={"footerBtns__"+index}>
              <button className="btn-link-light">{label}</button>
            </Link>
          )
        })}
      </div>
      {isAuth && <div className="footer-link-container">
        <button className="btn-link-light" onClick={logoutHandler}>
          Logout as {user.name}
        </button>
      </div>}
    </div>
  );
};

export default Footer;
