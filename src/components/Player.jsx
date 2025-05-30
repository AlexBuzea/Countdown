import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  // function handleChange(e) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // }

  function handleClick() {
    // setSubmitted(true);
    console.log(playerName);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"} </h2> */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
