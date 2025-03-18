import { useState, useEffect } from "react";
import "./App.css";

function App() {
  /*
****************************************************** COUNTER NOTES **************************************************

  useState() hook value ko change karny k liy responsable hota hia, basicaly ye value ko change nahi karta balke value ko UI k andar propogate kiya jata hai, yani DOM k andar. useState() se hamy hamesha 2 chizy milti hain (first yani 0 index par jo value milti hai (counter), counter hee nam nahi hai name kuch b rakh sakty hain) or (dusri value hamy, wo value nahi hoti balke ek function hota hai, yani (setCounter) ye b zruri nahi k ham usy setCounter hee kahe iss ka b name kuch b rakh sakty hain)
  */
 
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1;

    if(counter <= 20){
      setCounter(counter) 
    }else{
      alert('counter cannt exceed 20')
    }
  }
  const removeValue = () => {
    counter = counter -1;

    if(counter >= 0){
      setCounter(counter)    
    }else{
      alert('Counter can not below 0')
    }
  }

/*
Yaha ham pure JavaScript se ye masla hall kary ki koshish kar rahy thy
  let counter = 15

  const addValue = () => {
    counter = counter + 1;
    console.log("value is added", counter);
  }

*/

  
  return (
    <>
      <div className="bg-black px-5 py-4">
        <h1 className="font-bold text-center text-white">Samuel Developer</h1>
        <h2 className="mt-5 mb-5 text-white">Counter Vlaue {counter}</h2>
        <button className="mr-5 text-black"
       onClick={addValue}
        >Add Value</button>
        <button className="text-black"
        onClick={removeValue}
        >Remove Value</button>
      </div>
    </>
  );
}

export default App;
