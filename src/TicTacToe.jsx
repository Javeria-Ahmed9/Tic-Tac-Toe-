import { useRef, useState } from "react";

import pic from "./circle.png";
import pi from "./cross.png";

let array = ["", "", "", "", "", "", "", "", ""];

export function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  const WinLine = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  let showimage = (event, i) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      event.target.innerHTML = `<img src='${pic}'>`;

      setCount(++count);
      array[i] = "o";
    } else {
      event.target.innerHTML = `<img src='${pi}'>`;
      setCount(++count);
      array[i] = "x";
    }
    checkWin();
  };
  let checkWin = () => {
    if (array[0] === array[1] && array[1] === array[2] && array[2] !== "") {
      announceWin(array[2]);
    } else if (
      array[3] === array[4] &&
      array[4] === array[5] &&
      array[5] !== ""
    ) {
      announceWin(array[5]);
    } else if (
      array[6] === array[7] &&
      array[7] === array[8] &&
      array[8] !== ""
    ) {
      announceWin(array[8]);
    } else if (
      array[0] === array[3] &&
      array[3] === array[6] &&
      array[6] !== ""
    ) {
      announceWin(array[6]);
    } else if (
      array[1] === array[4] &&
      array[4] === array[7] &&
      array[7] !== ""
    ) {
      announceWin(array[7]);
    } else if (
      array[2] === array[5] &&
      array[5] === array[8] &&
      array[8] !== ""
    ) {
      announceWin(array[8]);
    } else if (
      array[0] === array[4] &&
      array[4] === array[8] &&
      array[8] !== ""
    ) {
      announceWin(array[8]);
    } else if (
      array[2] === array[4] &&
      array[4] === array[6] &&
      array[6] !== ""
    ) {
      announceWin(array[6]);
    }
  };
  let announceWin = (valuee) => {
    if (valuee === "o") {
      setLock(true);
      WinLine.current.style.width = "200px";
      WinLine.current.innerHTML = `<img  src=${pic}> wins`;
      WinLine.current.style.height = "53px";
    } else {
      setLock(true);
      WinLine.current.style.width = "200px";
      WinLine.current.innerHTML = `<img src=${pi}> wins`;
      WinLine.current.style.height = "53px";
    }
  };
  let reset = () => {
    setLock(false);
    array = ["", "", "", "", "", "", "", "", ""];
    WinLine.current.style.width = "270px";
    WinLine.current.innerHTML = "Tic Tac Toe";
    WinLine.current.style.height = "42px";
    box1.current.innerHTML = "";
    box2.current.innerHTML = "";
    box3.current.innerHTML = "";
    box4.current.innerHTML = "";
    box5.current.innerHTML = "";
    box6.current.innerHTML = "";
    box7.current.innerHTML = "";
    box8.current.innerHTML = "";
    box9.current.innerHTML = "";
  };

  return (
    <div id="mainDiv">
      <div id="one" ref={WinLine}>
        Tic Tac Toe
      </div>
      <div id="Box">
        <div id="two">
          <div id="q" ref={box1} onClick={(event) => showimage(event, 0)}></div>
          <div id="w" ref={box2} onClick={(event) => showimage(event, 1)}></div>
          <div id="e" ref={box3} onClick={(event) => showimage(event, 2)}></div>
        </div>
        <div id="three">
          <div id="r" ref={box4} onClick={(event) => showimage(event, 3)}></div>
          <div id="t" ref={box5} onClick={(event) => showimage(event, 4)}></div>
          <div id="y" ref={box6} onClick={(event) => showimage(event, 5)}></div>
        </div>
        <div id="four">
          <div id="u" ref={box7} onClick={(event) => showimage(event, 6)}></div>
          <div id="i" ref={box8} onClick={(event) => showimage(event, 7)}></div>
          <div id="o" ref={box9} onClick={(event) => showimage(event, 8)}></div>
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
