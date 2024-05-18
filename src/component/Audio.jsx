import Drum from "./Drum";
import data from "../data";

function Audio({ i }) {
  return (
    <Drum i={i}>
      <audio className="clip" id={data.text} src={data.src}></audio>
    </Drum>
  );
}

export default Audio;
