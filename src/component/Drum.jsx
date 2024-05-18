function Drum({ children, i }) {
  console.log(children);

  const clickHandler = () => {
    children.type.play();

    // setDisplay(data.name);
  };

  return (
    <button className="drum-pad" id={i.name} onClick={clickHandler}>
      {i.text}
    </button>
  );
}

export default Drum;
