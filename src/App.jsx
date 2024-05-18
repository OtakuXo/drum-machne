import { useState } from "react";
import data from "./data";
// import Audio from "./component/Audio";
import Drumpad from "./component/Drumpad";

function App(props) {
  const [display, setDisplay] = useState("");

  return (
    <div id="drum-machine">
      <div className="drumpad-wrapper">
        {data.map((i, index) => (
          <Drumpad data={i} key={index} setDisplay={setDisplay} />
        ))}
      </div>
      <div id="display"> {display}</div>
    </div>
  );
}

export default App;
