import { useRef, useState } from "react";

function Drumpad({ data, setDisplay }) {
  // const [audioControl] = useState(new Audio(data.src));
  // const [audioControl, setAudioControl] = useState();
  // const audioControl = useRef();

  window.addEventListener("keydown", (e) => {
    if (e.key.toUpperCase() === data.text) {
      document.getElementById(data.text).play();
      setDisplay(data.name);
    }
  });

  const clickHandler = () => {
    document.getElementById(data.text).play();
    setDisplay(data.name);
  };

  return (
    <button className="drum-pad" id={data.name} onClick={clickHandler}>
      <text>{data.text} </text>
      <audio className="clip" id={data.text} src={data.src}></audio>
    </button>
  );
}

export default Drumpad;
