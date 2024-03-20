import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);
    setCounter(counter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    // counter = counter - 1;
    // setCounter(counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Series</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>
        Add Value {counter}
      </button>

      <br/>

      <button
      onClick={removeValue}>
        Remove Value {counter}
      </button>

      <br/>

      <button>Display {counter}
      </button>
    </>
  )
}

export default App

/*
Hooks:-
It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

Hook Rules:-
1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional.
*/
