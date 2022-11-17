import "./loader.style.css";

export const Loader = ({ status }) => {
  return (
    <div
      className={`loader ${status === "loading" ? "" : "loader--hide"}`}
    ></div>
  );
};
