import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberUsed, setNumberUsed] = useState(false);
  const [charUsed, setCharUsed] = useState(false);
  const [password, setPassword] = useState("");
  //UseRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberUsed) str += "0123456789"
    if (charUsed) str += "!@#$%^&*_-[](){}~`=+"

    for (let i=1; i<=length; i++){
      let char=Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberUsed, charUsed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberUsed, charUsed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 my-8 py-3 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center my-3'> Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden md-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>

        </div>        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberUsed}
            id='numberInput'
            onChange={() => {
              setNumberUsed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charUsed}
              id="characterInput"
              onChange={() => {
                setCharUsed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

/*
useState Hook:-
we initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:
1. The current state.
2. A function that updates the state.

useEffect Hook:-
If you have any problem with any of these then run again.
It allows you to perform side effects in your components.
It accepts two arguments:
useEffect(<function>, <dependency>)

useRef Hook:-
This hook is used to create a reference of anything present in DOM.
It allows us to create a reference to a DOM element and keep track of variables without causing re-renders.
1. The useRef React hook allows us to save values between renders.
2. It stores a mutable value that does not cause a re-render when updated.
3. It helps us to access a DOM element directly.

useCallback Hook:-
It returns a memoized function to reduce unnecessary callbacks.
This useCallback hook is used when you have a component in which the child is rerendering again and again without need.
[Memoization is like storing the values as cache that need not to be calculated again and again.]
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b],
);
}
*/
