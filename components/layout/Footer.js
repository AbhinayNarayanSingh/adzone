import { FOOTER_LOGO, PROJECT_DESCRIPTION } from "@/Environment";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-brand-container">
        <img src={FOOTER_LOGO} alt="FOOTER_LOGO"/>
        <p>{PROJECT_DESCRIPTION}</p>
      </div>

      <div className="footer-link-container">
        <button className="btn-link-light">Help</button>
        <button className="btn-link-light">Terms & Condition</button>
        <button className="btn-link-light">Privacy & Policy</button>
        <button className="btn-link-light">FAQ</button>
        <button className="btn-link-light">Sitemap</button>
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
