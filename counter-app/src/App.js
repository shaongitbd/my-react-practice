import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'


function App() {
  const [counter,setCounter] = useState(0)

  function increase(){

   setCounter((prev)=> prev+1)
  }

  function decrease(){
   setCounter((prev)=>prev-1)
  }

  return (
  <body class="h-screen  bg-gray-900">
    <div class="flex flex-col justify-center items-center">
    <div><h2 className="pt-40 mb-10 text-white text-center bg-gray-900 text-5xl tracking-normal font-mono font-semibold">  Counter App </h2></div>


    <div className="py-3 px-12 text-md bg-white text-gray font-bold flex flex-row"><span className="w-full text-4xl m-2">{counter}</span>  <div class="flex flex-col"><button onClick={increase} className="text-black ml-2 text-xl font-bold">+</button><button onClick={decrease} className="text-black ml-2 text-xl font-bold">-</button></div></div>



    </div>
    </body>
  );
}

export default App;
