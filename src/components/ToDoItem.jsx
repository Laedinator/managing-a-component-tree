//If you want to strike through, active from here:::::::
// import React, { useState } from "react";

// function toDoItem(props) {
//   //give the list item a state (true or false)
//   const [isDone, setIsDone] = useState(false);

//   function handleClick(prevValue) {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     //when clicked upon, change the text to a line through
//     //when clicked again, it will go back to normal
//     <div style={{ textDecoration: isDone ? "line-through" : "none" }}>
//       <li key={props.id} onClick={handleClick}>
//         {props.data}
//       </li>
//     </div>
//   );
// }
// export default toDoItem;
//::::::: to here,
//if you want to delete an item, make active from here::::::::
import React, { useState } from "react";

//use the function with props.unChecked
function toDoItem(props) {
  function handleClick(prevValue) {}
  return (
    <div
      onClick={() => {
        props.unChecked(props.id);
      }}
    >
      <li key={props.id}>{props.data}</li>
    </div>
  );
}
export default toDoItem;

//:::::::: to here!
