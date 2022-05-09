import './App.css';
import React,{useState} from 'react';




function App() {

  const [value,setValue] = useState('')
  const [todos, setTodos] = useState([])
  const [counter,setCounter] = useState(0)

  function changer(e){

    setValue(e)


  }


  function TodoBtnClick(){

    //cheking if nothing is typed

    if(value == ''){

    return

    }
    //if something is typed


    setTodos([...todos, {id:counter, data:value, completed: false}])
    setValue('')
    setCounter((prev)=>prev+1)

  }
  function RemoveTask(id){
    const wow = todos.filter(function wow(a){
    if(a.id != id){
     console.log(id, a)
     return a
     }
     else{
     return
     }
     }
    )
    setTodos(wow)

  }

  function completeTask(id){
  const wow = todos.filter(
    function wow(todo){
     if(todo.id==id){

       todo.completed = true;


     }
     return todo

    }



  )
  setTodos(wow);

  }


  return (
    <div className="App">
      <body className="bg-gray-900 h-screen ">
      <div className="max-w[1200px] flex flex-col justify-center items-center">
      <h3 className="mt-40  text-white text-5xl font-poppins font-[600] "> Your To Do list</h3>

      <div className="w-140 mt-8 flex flex-row">
      <input className="w-full border px-6 py-2 text-grey-darkest rounded" value={value} onChange={(e)=>changer(e.target.value)}/> <button className="ml-2 text-white font-semibold text-sm bg-purple-600 px-14 h-12 rounded hover:text-gray-800 hover:font-bold" onClick={()=>TodoBtnClick()}> Add </button></div>

      <div className="mt-8 w-100 ">
      <table className="bg-white w-full px-2  rounded pb-3">
      <tbody>
      <tr class="text-black text-left border-b-2 border-gray-300">
      <th class="p-3  text-center" >Task Name</th>
      <th class="p-2"> Status </th>
      <th class="p-2">Complete  </th>
      <th class="p-2">Delete </th>
      </tr>


      {todos.map((todo)=>( <tr className="text-left text-black" >
      <td class="p-2 text-center">{todo.data}</td>
      <td class="p-2"> {todo.completed?(<p> Task Completed</p>):(<p> Not Completed</p>)} </td>
      <td class="p-2 text-center" >{todo.completed?(""):(<button className="text-purple-800" onClick = {()=>completeTask(todo.id)} >

      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>


      </button>  ) } </td>



      <td class="p-2" ><button className="text-red-700" onClick={()=>RemoveTask(todo.id)}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
      </button></td>

      </tr>  ))}

      </tbody>

      </table>
      </div>

      </div>
      </body>
    </div>
  );
}

export default App;
