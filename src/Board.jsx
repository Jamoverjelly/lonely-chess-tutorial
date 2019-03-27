import React from "react";
import Square from "./Square";
import Knight from "./Knight";
import { moveKnight, canMoveKnight } from "./Game";

/* Styling properties applied to the board element */
const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap"
};

/* Styling properties applied to each square element */
const squareStyle = {
  width: "12.5%",
  height: "12.5%"
};

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={squareStyle} onClick={() => handleSquareClick(x, y)}>
      <Square black={black}>{piece}</Square>
    </div>
  );
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return <div style={boardStyle}>{squares}</div>;
}
