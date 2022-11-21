import "./brands-detail.style.css";
import { GoogleIcon } from "../googleIcon/googleIcon.component";
export const BrandsDetail = ({ product }) => {
  const {
    brands,
    code,

    ecoscore_grade = "-",
    packaging,
    nutiments,
    labels,
    manufacturing_places,
    product_name,
    quantity,
    image_url = "https://via.placeholder.com/100/000000/FFFFFF/?text=Product Image",
  } = product;
  const ecosGrade = ecoscore_grade.toUpperCase();

  return (
    <div className="brand-detail-container">
      <div className="brand-detail-image-container">
        <img src={image_url} alt={brands} />
      </div>
      <div className="brand-detail-description-container">
        <div className="brand-detail-description-header">
          <div>
            <GoogleIcon
              iconName="local_police"
              stylingClassName="ecoscore-badge-icon"
            />
          </div>
          <div className="ecoscore-grade-icon">
            {ecoscore_grade === "unknown" ||
            ecoscore_grade === "not-applicable" ? (
              <span style={{ fontSize: "30px" }}>&empty;</span>
            ) : (
              ecosGrade
            )}
          </div>
          <div className="labels-brand-detail">{labels}</div>
        </div>

        <div className="brand-detail-product-name">{product_name}</div>
        <div className="brand-detail-description-body-container">
          <div className="brand-detail-decription-body-left">
            <div className="brands-detail-description-title">
              {`${brands}`}
              <span>&trade;</span>
            </div>
            <div>
              <span style={{ color: "gray" }}>Produced: &nbsp;</span>
              <span style={{ fontWeight: "600", fontSize: "15px" }}>
                {manufacturing_places}
              </span>
            </div>
            <div>
              <span style={{ color: "gray" }}>Quantity:&nbsp;</span>
              <span style={{ fontWeight: "600", fontSize: "15px" }}>
                {quantity}
              </span>
            </div>
            <div></div>
          </div>
          <div className="brand-detail-decription-body-right">
            <div style={{ color: "gray", fontWeight: "100" }}>
              Product Barcode
            </div>
            <div className="brands-detail-barcode">{code}</div>
          </div>
        </div>
        <span style={{ fontSize: "15px", color: "gray" }}>
          Product Description :
        </span>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          commodo purus. Nullam a fringilla ex. Fusce porta imperdiet mi, a
          posuere sem pretium et. Aliquam non lacus luctus, porttitor mauris
          vitae, malesuada nunc. Donec turpis nunc, ultrices in felis sed,
          ultricies pellentesque lectus. Aliquam ultricies nibh urna, a placerat
          orci dictum vitae. Pellentesque nec diam metus. Nam vel ligula
          pellentesque, varius nibh in, viverra nulla. Vestibulum congue metus
          arcu, vestibulum placerat nisi pulvinar sit amet. Sed in dictum lorem,
          eu pellentesque est. Quisque volutpat non ligula vel porta.
        </div>
      </div>
    </div>
  );
};
