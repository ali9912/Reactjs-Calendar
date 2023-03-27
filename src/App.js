import logo from './logo.svg';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from 'react';
function App() {
  const [events,Sevents] = useState([
  {id:1, title: 'Demo1', start: "2023-03-15" },
  {id:2,title:"Demo2", start:"2023-03-01",end:"2023-03-04"}
])
var date="2023-03-05"
const [name,Setname]=useState([])
const [data,SetData]=useState([])
function test(){
  //  alert(data)
alert(date)
  console.log("what",data)
}
const[todo,SetTodo]=useState([])
const handleChange =(event)=>{
  // Setname(event.target.value)
// 
 let value = event.target.value;
      let inputName = event.target.name;
      if (inputName == "title") {
         Setname(value);
      } else if (inputName == "start") {
         SetData(value);
      } else if (inputName == "end") {
         sEnd(value);
      } 
   }

const [endd,sEnd]=useState([])

const deleteTask =(id)=>{
  // const arr = todo.filter((task)=>{
  //   if(task === taskName){
  //     return false;
  //   }
  //     else{
  //       return true;
  //     }
    //  SetTodo(arr);
Sevents(events.filter((task)=> task.id !== id))
}
const add=()=>{
 const arr= { 
  
  id:todo.length === 0 ? 1:todo[todo.length - 1].id +1,
  title: name, start: data,end:endd }
  const newTo={
    id:todo.length === 0 ? 1:todo[todo.length - 1].id +1,
    // id:1,
    tName:name
   }
Sevents([...events,arr])
SetTodo([...todo,newTo]) 
}

// function getData(val){
//   Setname(val.target.value)
//   SetData(name);
//   console.log(name)
// }
  return (
 <div>
 <form>
  <label>
    Title:
    <input placeholder='Event Title' type="text" name="title" onChange={handleChange}/>
  </label>
  <label>
    Start Date
    <input placeholder='yyyy-mm-dd' type="text" name="start" onChange={handleChange} />
  </label>
  <label>
    End Date
    <input placeholder='yyyy-mm-dd' type="text" name="end" onChange={handleChange}  />
  </label>
  {/* <input type="submit" value="Submit" /> */}
</form>
<button onClick={add}> Add</button>
{events.map((task)=>{
  return(
    <div>
    <h1>{task.title}</h1>
  <button title='delete' onClick={()=>deleteTask(task.id)}>Delete</button>
 </div>
  )
})}
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
export default App;
