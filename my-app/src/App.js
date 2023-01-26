import { useState } from "react";


export default function App() {
  const [ contact, setContact] = useState({
    fName:"",
    lName:"",
    email:""
  });
  //const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    // console.log(event.target.value);
    const { value,name}=event.target;
    console.log(value);
    console.log(name);

    setContact(prevValue=>{
      console.log(prevValue);
      if( name === "fName"){
        return{
          fName:value,
          lName:prevValue.lName,
          email:prevValue.email
        }
      }

      else if(name==="lName"){
        return{
          fName:prevValue.fName,
          lName:value,
          email:prevValue.email
        }
      }
      else if(name==="email"){
        return{
          fName:prevValue.fName,
          lName:prevValue.lName,
          email:value
        }
      }
    });


  }
  function handleClick(event) {
    //setFullName(fullName);
    event.preventDefault();
    console.log("Submitted");
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
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          type="text"
          placeholder="First Name"
          value={contact.fName}
        />

        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          value={contact.lName}
        />

        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          value={contact.email}
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
