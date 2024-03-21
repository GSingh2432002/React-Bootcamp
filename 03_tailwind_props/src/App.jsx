import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Gaurav",
    age: 22
  }
  return (
    <>
      <h1 className='bg-sky-500/75 text-black p-4 rounded-xl mb-5 '>Tailwind Test</h1>
      <Card username="Gksingh" btnText="Click me!"/>
      <Card username="Aksingh" btnText="About me!"/>
    </>
  )
}

export default App
