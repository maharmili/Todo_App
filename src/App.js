
import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

const getData=()=>{
  const data=JSON.parse(localStorage.getItem("list"));
  if(data){
    return JSON.parse(localStorage.getItem("list"))
  }
  else{
    return []
  }
}

const[listTodo,setListTodo]=useState(getData());

useEffect(()=>{
  localStorage.setItem("list",JSON.stringify(listTodo))
},[listTodo])

  const addList=(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }

const deleteListItem=(key)=>{
  let newListTodo=[...listTodo];
  newListTodo.splice(key,1);
  setListTodo([...newListTodo])
}

const deleteAll=()=>{
  const clearArr=[];
  setListTodo(clearArr)
}

  return (
    <div className="main-conatiner">
     <div className="center-container">
     <h1 className='app-heading'> Todo List</h1>
   <TodoInput  addList={addList}/>
    
<hr />
{
  listTodo?.map((listItem,i)=>{
return(
      <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
    )
  })
}
     </div>
     <button onClick={deleteAll} className='deleteall-btn'>Remove All</button>
     </div>
  );
}

export default App;
