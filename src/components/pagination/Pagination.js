import React, { useState } from "react";
import style from "./pagination.module.css";
const Pagination = ({ setPageNumber, pageNumber, perPage, coinNumbers }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(coinNumbers / perPage); i++) {
    pages.push(i);
  }
  console.log(`${coinNumbers} coin in ${pages.length} pages `);

  return (
    <div className={style.pages}>
      <div
        onClick={() => {
          setPageNumber((preveState) =>
            preveState > 1 ? preveState - 1 : preveState
          );
        }}
        className={`${style.pageIndex} ${pageNumber-1===0?style.disable:""}`}
      >
        preve
      </div>

      {pages.map((page) => {
        return (
          <div
            onClick={() => {
              setPageNumber(page);
            }}
            className={`${style.pageIndex} ${
              page === pageNumber ? style.show : ""
            }`}
          >
            {page}
          </div>
        );
      })}
      <div
        onClick={() => {
          setPageNumber((preveState) =>
            preveState < Math.ceil(coinNumbers / perPage)
              ? preveState + 1
              : preveState
          );
        }}
        className={`${style.pageIndex} ${pageNumber===Math.ceil(coinNumbers / perPage)?style.disable:""}`}
      >
        next
      </div>
    </div>
  );
};

export default Pagination;
