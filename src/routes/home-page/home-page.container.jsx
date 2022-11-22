import { useNavigate } from "react-router-dom";
import { FeatureDescriptionCard } from "../../components/feature-description/feature-description.component";
import { GoogleIcon } from "../../components/googleIcon/googleIcon.component";
import "./home-page.style.css";
export const HomePage = () => {
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate("/sign-in");
  };
  const featureData = [
    {
      id: 1,
      title: "Save Product to Your Account",
      iconName: "collections_bookmark",
      desc: " Save your favorite Products that suits your diet, and open it later for your remainder daily. Each product analyzed based on Ecoscore Grade",
    },
    {
      id: 2,
      title: "Lookup Products using Barcodes",
      iconName: "search",
      desc: "look for product information that fits what you want to meet the needs needed for your health",
    },
    {
      id: 3,
      title: "Find out each product information",
      iconName: "monitor_heart",
      desc: "find out the value and composition of the product you have chosen so that it can be tailored to what your body needs",
    },
  ];
  return (
    <div className="home-page-container">
      <div className={`socials-side-bar-container `}>
        <div>
          <span>F</span>
        </div>
        <div>
          <span>L</span>
        </div>
        <div>
          <span>G</span>
        </div>
      </div>
      <div className="home-page-banner-container">
        <div className="home-page-banner-title-container">
          <div className="title-card">
            <span className="title-card-title-name">
              Discover Your Diet Plan!
            </span>
            <span className="title-card-title-name-second">
              Track Your Grocery list Product Quality <br /> & Plan your Diet
              Now
            </span>
            <span>
              Plan your Diet, discover the product, see the product Grade
              qualiy, then manage your saved list. all become handy with
              GrocerList <br /> Save your Product discovery in one place.
            </span>
            <div className="anchor-container">
              <span className="get-to-know-anchor">
                <a href="#feature">Get To Know about this Web App &darr;</a>
              </span>
            </div>
          </div>
        </div>
        <div className="home-page-button-section">
          <div className="encouragement-text"></div>
          <div
            id="feature"
            onClick={redirectHandler}
            className="home-page-button-container"
          >
            <button>Login With Google</button>
          </div>
        </div>
      </div>
      <div className="home-page-content-description-container">
        <div className="content-description-card-container">
          {featureData.map((e) => {
            return <FeatureDescriptionCard data={e} key={e.id} />;
          })}
        </div>
      </div>
      <div className="home-page-detail-container">
        <div className="home-page-content-description-detail-container">
          <div className="home-page-content-detail">feature description</div>
          <div className="home-page-content-detail-image-container">
            <img src="" alt="detail image" />
          </div>
        </div>
        <div className="home-page-content-description-detail-container-left">
          <div className="home-page-content-detail">feature description</div>
          <div className="home-page-content-detail-image-container">
            <img src="" alt="detail image" />
          </div>
        </div>
        <div className="home-page-content-description-detail-container">
          <div className="home-page-content-detail">feature description</div>
          <div className="home-page-content-detail-image-container">
            <img src="" alt="detail image" />
          </div>
        </div>
      </div>
    </div>
  );
};
