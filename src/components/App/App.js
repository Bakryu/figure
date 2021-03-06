import React, { Component } from "react";
import "./app.css";

const App = () => {
  const array = [
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
    [
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
      <span className="columnBlack"></span>,
    ],
  ];
  const radius = 1; // ???????????????? ????????????
  const pointOffset = [1, 0]; //?????????? ???? ?????? Y X
  const getMiddleDot = (array, pointOffset) => {
    const y = Math.round(array.length / 2) - 1 + pointOffset[0]; // -1 ?????? ?????????????????????????? ?????? ?????? ???????????? ???????????? ???????????????????? ?? 0
    const x = Math.round(array[0].length / 2) - 1 + pointOffset[1]; // -1 ?????? ?????????????????????????? ?????? ?????? ???????????? ???????????? ???????????????????? ?? 0
    return [y, x];
  };
  const middleDot = getMiddleDot(array, pointOffset);

  const getFigure = (array, middleDot, radius) => {
    const xStart = middleDot[1] - radius;
    const xEnd = middleDot[1] + radius;
    const yStart = middleDot[0] - radius;
    const yEnd = middleDot[0] + radius;

    const row = []; //???????????? ??????????

    for (let y = 0; y < array.length; y++) {
      // ???????? ?????? ?????? ????????????, ???????????????????? ?????? ?????? ??????????????????
      if (y < yStart || y > yEnd) {
        row.push(
          <span className="row" key={y}>
            {array[y].map((item) => {
              return item;
            })}
          </span>
        );
        continue;
      }

      const column = []; // ???????????? ??????????????

      for (let x = 0; x < array[y].length; x++) {
        if (x < xStart || x > xEnd) {
          column.push(array[y][x]);
          continue;
        }
        column.push(<span className="columnRed" key={x}></span>);
      }

      row.push(
        <span className="row" key={y}>
          {column}
        </span>
      );
    }

    return row;
  };

  return (
    <section className="hero-section">
      <div className="wrapper">{getFigure(array, middleDot, radius)}</div>
    </section>
  );
};

export default App;
