import React from "react";
import Squares from "./components/Squares";
import Confetti from 'react-confetti'

export default function App() {
  let [arrayOfNums, setarray] = React.useState([
    { bool: false, value: 0 },
    { bool: false, value: 1 },
    { bool: false, value: 2 },
    { bool: false, value: 3 },
    { bool: false, value: 4 },
    { bool: false, value: 5 },
    { bool: false, value: 6 },
    { bool: false, value: 7 },
    { bool: false, value: 8 },
    { bool: false, value: 9 },
  ]);

  console.log(arrayOfNums);
  let [roll, setroll] = React.useState(true);
    React.useEffect(() => {
        if (arrayOfNums.every((e) => e.bool === true)) {
            setroll(false);
            setarray((prev) => prev.map((e) => ({ ...e, bool: false })));
      
           
            localStorage.removeItem("chosen");
          }
},[arrayOfNums])
  function FillTheBoxes() {
 
      for (let index = 0; index < 10; index++) {
        setroll(true);
        setarray((prev) =>
          prev.map((e) => {
            return e.bool ? e : { ...e, value: Math.floor(Math.random() * 10) };
          })
        );
      
    }
  }
  return (
    <>
      <div className="container">
        <div id="tenzies">
          <div id="active">
            <div className="description">
              <h3>Tenzies</h3>
              <p>
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
              </p>
            </div>
            <Squares arrayOfNums={arrayOfNums} roll={roll} />
            <button className="btn" onClick={FillTheBoxes}>
              {roll ? "Roll" : "Game Reset"}
                      </button>
                    { !roll&& <Confetti
                          width={1000 }
                          height={1000 } />}
            
          </div>
        </div>
      </div>
    </>
  );
}
