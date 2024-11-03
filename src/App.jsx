import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  reload,
  addValue,
  subtractValue,
  multiplyValue,
  divideValue,
  expValue,
} from "./store/counterSlice";
import { writeNote, clearNotes } from "./store/notesSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counterValue.count);
  const note = useSelector((state) => state.notesValue.note);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);

  function inc() {
    dispatch(increment());
  }

  function dec() {
    dispatch(decrement());
  }

  function add() {
    const val = Number(value);

    dispatch(addValue(isNaN(val) ? 0 : val));
  }

  function sub() {
    const val = Number(value);
    dispatch(subtractValue(isNaN(val) ? 0 : val));
  }

  function mul() {
    const val = Number(value);
    dispatch(multiplyValue(isNaN(val) ? 0 : val));
  }

  function div() {
    const val = Number(value);
    dispatch(divideValue(isNaN(val) ? 0 : val));
  }

   function exp() {
    const val = Number(value);
    dispatch(expValue(isNaN(val) ? 0 : val));
  }

  function write() {
    dispatch(writeNote(text + ", "));
  }

  const handleClearInp = (e) => {
    e.preventDefault();
    setText(" ");
  };

  return (
    <div className="container">
      <div>
        <h3>{count}</h3>
        <button onClick={inc}>INC +</button>
        <button onClick={dec}>DEC -</button>
      </div>
      <div>
        <button onClick={() => dispatch(reload())}>RESET -</button>
      </div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(el) => setValue(el.target.value)}
        />
        <button onClick={add}>PLUS VALUE</button>
        <button onClick={sub}>SUBTRACT</button>
        <button onClick={mul}>MULTIPLY</button>
        <button onClick={div}>DIVIDE</button>
        <button onClick={exp}>EXPONENTIATION</button>
      </div>
      <div>
        <h3>{note}</h3>
        <div>
          <input
            type="text"
            placeholder="write note"
            value={text}
            onChange={(el) => setText(el.target.value)}
          />
          <button onClick={write}>SAVE NOTE</button>
          <button onClick={handleClearInp}>RESET INPUT</button>
          <button onClick={() => dispatch(clearNotes())}>CLEAR NOTES</button>
        </div>
      </div>
    </div>
  );
}

export default App;
