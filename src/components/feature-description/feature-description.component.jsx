import { GoogleIcon } from "../googleIcon/googleIcon.component";

import "./feature-description.style.css";

export const FeatureDescriptionCard = ({ data }) => {
  const { iconName, title, desc } = data;
  return (
    <div className="content-description-card">
      <div className="feature-icon-container">
        <GoogleIcon iconName={iconName} />
      </div>
      <div className="feature-description-container">
        <span className="feature-title">{title}</span>
        <span className="feature-description">{desc}</span>
      </div>
      <div className="feature-desc-extend">{desc}</div>
    </div>
  );
};
