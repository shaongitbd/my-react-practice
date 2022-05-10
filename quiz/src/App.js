import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import {useQuery} from 'react-query'
import data from './data.jsx'



function App() {
   const [Name,setName] = useState('')
   const [val,setVal]=useState('')
   const [cCounter,setCcounter] = useState(0)
   const [points, setPoints] = useState(0)
   const [run,setRun] = useState(true)
   const [change,useChange] = useState(false)







	function checkans(given){
      data[cCounter].answerOptions.map(
      function _i (answer){

      if (answer.answerText==given){
         if(answer.isCorrect==true){

         setPoints((prev)=>prev+1)
         }

      }
      }


      )
      if (cCounter==data.length-1){
      setRun(false)
      setCcounter(0)
      }
      setCcounter((prev)=>prev+1)

      }





  return (



<body className="bg-gray-900 h-screen w-screen">
<div className="flex pt-20 ms-auto justify-center items-center">
<div className="border border-[#222f44] w-1/2 pl-12 pr-12 pt-10 pb-10  border-blue-200 rounded-lg">


{(run&&!Name)? (<div className="align-items justify-center"><h3 className="mb-10  text-white text-left font-bold text-3xl"> Enter your name </h3> <input className="text-gray-700 h-12 px-2 rounded" value={val} onChange={(e)=>setVal(e.target.value)}/>
<button className="ml-4 w-24 h-12 text-white  bg-blue-700 px-8  rounded" onClick={()=>setName(val)}> Set</button></div>):""}

{(run&&Name)?(<h3 className="mb-10  text-white text-left font-bold text-3xl"> {data[cCounter].questionText} </h3>):""}

<div className={`m-2 +$run?"bg-[#131b2c]":""} rounded`}>

{(Name&&run)?(data[cCounter].answerOptions.map((answer)=> (<button className="w-full text-left text-white text-xl  px-8 py-4  font-bold hover:bg-gray-700" onClick={()=>checkans(answer.answerText)}>{answer.answerText} </button>) ) ):""}

{(Name&&!run)?(<><div><h3 className="text-white text-[500] text-3xl font-bold text-center">
 Congrats! {Name}</h3><h4 class="mt-8 text-white text-xl font-bold text-left " > You have answered  {points} Questions Correctly </h4></div>

 <div className="w-full mt-3 ">
 <span className="pt-3 pb-6 text-lg text-white font-bold text-left"> Correct Answers: </span>
 <ul>
 {data.map((dat)=>(<li class="flex flex-row border-b bg-gray-700 bg-opacity-5  border-gray-300"><div className="mt-2 p-2 w-1/2 text-white text-md font-bold"> {dat.questionText}  </div><div className="mt-2 p-2 w-1/2 text-white text-md font-bold"> {dat.answerOptions.map((ans)=> (ans.isCorrect==true)?ans.answerText:null)}</div> </li>))}
 </ul>
 </div>
</> ):""}


</div>
</div>
</div>
</body>
  );
}

export default App;
