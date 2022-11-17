import { useContext } from "react";
import { SnacksContext } from "../context/snacksList";

import { GoogleIcon } from "../googleIcon/googleIcon.component";
import { SearchProductContext } from "../context/searchProduct.context";

import "./pagination.style.css";

export const Pagination = ({ pageCount, currentPage }) => {
  const { currPage, setCurrPage } = useContext(SnacksContext);
  const { setStatusVerbose } = useContext(SearchProductContext);
  return (
    <div className="pagination-container">
      <div className="pagination-component">
        <div
          onClick={() => {
            setCurrPage(1);
            window.scrollTo(0, 0);
            setStatusVerbose("loading");
          }}
          className="base-page-count-btn"
        >
          <h1>FirstPage</h1>
        </div>
        <div
          onClick={() => {
            setCurrPage(Number(currPage) - 1);
            window.scrollTo(0, 0);
            setStatusVerbose("loading");
          }}
        >
          <GoogleIcon
            iconName="chevron_left"
            stylingClassName="navigationButton"
          />
        </div>
        <h2>{currentPage}</h2>
        <div
          onClick={() => {
            setCurrPage(Number(currentPage) + 1);
            window.scrollTo(0, 0);
            setStatusVerbose("loading");
          }}
        >
          <GoogleIcon
            iconName="chevron_right"
            stylingClassName="navigationButton"
          />
        </div>
        <div
          onClick={() => {
            setCurrPage(pageCount);
            window.scrollTo(0, 0);
            setStatusVerbose("loading");
          }}
          className="max-page-count-btn"
        >
          <h1>{pageCount}</h1>
        </div>
      </div>
    </div>
  );
};
