import { useState } from "react";


export default function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
    console.log("Mouse over");
  }
  function handleMouseOut() {
    setMouseOver(false);
    console.log("Mouse out");
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
