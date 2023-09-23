import "./App.css";
import { useState, useRef } from "react";
import trashIcon from './Images/delete.png'
import editIcon from './Images/editing.png'




function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const inputRef = useRef(null)
  const setFocus = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 200)
  };

  return (
    <>
      <div className="App">
        <div className="todoBox">
          <h1 className="heading">Todo List</h1>
          <h1>A Simple React Todo List App</h1>
          <hr />
          <div className="inputField">
            <h1>New Todo</h1>
            <label>
              <input type="text" value={value} placeholder="Add a new todo" onChange={(e) => {
                setValue(e.target.value);
              }} />
              <button className="addTodoBtn" onClick={() => {
                if (value === "") {
                  alert(" Please enter a todo");
                } else {
                  setTodo([{ value, edit: false }, ...todo])
                  setValue("")
                }
              }}>Add Todo</button>
            </label>
            <button className="clearALlBtn" onClick={() => {
              setTodo([])
            }}>Clear All</button>
          </div>
          <div className="main">
            <div className="todoList">
              <ol>
                {todo.map((v, i) => {
                  return <li key={i}>
                    <div className="listItem">
                      <label>
                        {v.edit ? <input type="text" ref={inputRef} className="updateInput" defaultValue={v.value} onChange={(e) => {
                          todo[i].value = e.target.value
                        }} /> : <p>{v.value}</p>}
                      </label>
                      <div className="imageGroup">
                        {v.edit ?
                          <button className="updateBtn" onClick={() => {
                            const arr = [...todo]
                            arr[i].edit = false
                            setTodo(arr)
                          }}>Update</button>
                          :
                          <div>
                            <img src={editIcon} alt="Edit Icon" onClick={() => {
                              setFocus();
                              const arr = [...todo]
                              arr[i].edit = true
                              setTodo(arr)
                            }} title="Edit" />
                            <img src={trashIcon} title="Delete" onClick={() => {
                              const arr = [...todo]
                              arr.splice(i, 1)
                              setTodo(arr)
                            }} alt="Trash Icon" />
                          </div>
                        }
                      </div>
                    </div>
                  </li>
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;







// function App() {
//   const inputRef = useRef(null);

//   const setFocus = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={setFocus}>Focus on Input</button>
//     </div>
//   );
// }

// export default App;
