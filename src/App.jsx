import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  //let counter = 0

  const addval = () =>{
    if(counter>=10){
      counter = 10;
    }
    else{
    counter = counter+1;
    }
    setCounter(counter);
    //console.log(counter);
  }

  const removeval = () =>{
    if(counter<=0){
      counter = 0;
    }
    else{
    counter = counter-1;
    }
    setCounter(counter);
    //console.log(counter);
  }
  return (
    <>
    <h1>Change the value of counter <br />{counter}</h1>
    <h2>please enter any button</h2>
    <button
    onClick={addval}>Increase</button>
    <button
    onClick={removeval}>Decrease</button>
    <p>Result : {counter}</p>
    </>
  )
}

export default App
