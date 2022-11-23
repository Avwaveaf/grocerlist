import "./instruction-flow-card.style.css";

import { GoogleIcon } from "../googleIcon/googleIcon.component";

const instructionInfos = [
  {
    id: 1,
    iconName: "login",
    desc: "Login to your Google Account and Navigation bar will added products age etc. and navigate to Products Page ",
  },
  {
    id: 2,
    iconName: "checklist",
    desc: "Select some Products on Products Page that you like",
  },
  {
    id: 3,
    iconName: "shopping_cart_checkout",
    desc: "Checkout your product to add to your Diet List Page by selecting dropdown cart and click 'See All' ",
  },
  {
    id: 4,
    iconName: "list",
    desc: "Click Check out on Cart Page then go to Diet List Page",
  },
];

const InfoCard = ({ item }) => {
  const { iconName, desc } = item;
  return (
    <div className="instruction-cards-item-container">
      <div className="instruction-card-item-icon">
        <GoogleIcon iconName={iconName} stylingClassName="instruction-icon" />
      </div>
      <div className="instruction-card-item-description">
        <span className="insctruction-card-item-desc-text">{desc}</span>
      </div>
    </div>
  );
};

export const InstructionFlowCard = () => {
  return (
    <div className="instruction-card-container">
      <span className="instruction-card-title">Guide</span>
      <div className="instruction-card-structure-container">
        {instructionInfos.map((e) => {
          return <InfoCard item={e} key={e.id} />;
        })}
      </div>
    </div>
  );
};
