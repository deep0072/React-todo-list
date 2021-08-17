import React, { useEffect, useState } from "react"
import './App.css';
import Form from "./components/form"
import TodoList from "./components/Todolist";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all")

  

  const [filteredTodos, setFilteredTodos] = useState([])


  useEffect(()=>{
    getLocalTodos()
  }, [])

  
  useEffect(()=>{

    filterHandler()
   

    saveLocalTodos()
   
    
    // 

  },[status, todos])

  const filterHandler = ()=>{
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed == true))
        
        break
      
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=> todo.completed == false))

        break
      
      default:
        setFilteredTodos(todos)
      

    }

  }



  const saveLocalTodos = () =>{

    localStorage.setItem("todos", JSON.stringify(todos))

  }
  


  const getLocalTodos = ()=>{



    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
      console.log(todos)

    } 
    else{
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
    
      setTodos(todosLocal)
    }
  }
  
  // saveLocalTodos()
  
 



  return (
    <div className="App">
      <header>
        <h1>TODO LIST  </h1>
      </header>

      <Form
       todos = {todos} 
       setTodos = {setTodos}
       setInputText={setInputText}
       inputText={inputText}
       setStatus = {setStatus}
        
       />
      <TodoList  setTodos = {setTodos} todos = {todos} filteredTodos = {filteredTodos}/>
      
    </div>
    
  );
}

export default App;
