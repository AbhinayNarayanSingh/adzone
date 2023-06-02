import { FOOTER_LOGO, PROJECT_DESCRIPTION } from "@/Environment";
import Link from "next/link";
import { navigateToPage } from "@/utils/navigate/navigator"

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
      {true && <div className="footer-link-container">
        <button className="btn-link-light">
          Logout as Abhinay Narayan Singh
        </button>
      </div>}
    </div>
  );
};

export default Footer;
