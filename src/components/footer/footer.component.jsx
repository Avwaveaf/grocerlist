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
          <a
            className="profile-desc"
            href="https://avwaveaf.github.io/petrolodex/"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon iconName="public" /> &nbsp;PetAdopt
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="profile-container">
          <span className="profile-title">Social Media:</span>
          <a
            className="profile-desc"
            href="https://www.linkedin.com/in/muhamad-afif-fadillah-9bab0221a"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon iconName="share" /> &nbsp;LinkedIn
          </a>
          <a
            className="profile-desc"
            href="https://github.com/Avwaveaf"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon iconName="share" /> &nbsp;Github
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Created with React 2022 - &copy;Avwave Project GrocerList</span>
      </div>
    </div>
  );
};
