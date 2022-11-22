import "./footer.style.css";
import { GoogleIcon } from "../googleIcon/googleIcon.component";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="profile-container">
          <span className="profile-title"> My Profile</span>
          <span className="profile-desc">
            <GoogleIcon iconName="person" /> &nbsp;Muhamad Afif Fadillah
          </span>
          <span className="profile-desc">
            <GoogleIcon iconName="email" /> &nbsp;Avwave12@gmail.com
          </span>
          <span className="profile-desc">
            <GoogleIcon iconName="email" /> &nbsp;5dillah01@gmail.com
          </span>
        </div>
        <div className="profile-container">
          <span className="profile-title">My other Portofolio</span>
          <a className="profile-desc" href="">
            <GoogleIcon iconName="public" /> &nbsp;PetAdopt
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-title">Me on Social media:</div>
        <div>L</div>
        <div>G</div>
      </div>
    </div>
  );
};
