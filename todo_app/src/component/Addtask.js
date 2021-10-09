import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

const Addtask = () => {
    const [task,setTask] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");

const tasks = useSelector((state)=>state);
const dispatch = useDispatch();
const history =useHistory();

    const handleSubmit = (e)=>{

        e.preventDefault();
        if(!task ||!date||!time){
            return toast.warning("Please fill in all fields")
        }

     const data ={
         id: tasks[tasks.length -1].id +1,
         task,
         date,
         time
     };
    dispatch({type: "ADD_TASK",payload:data});
    toast.success(" TAsk added successfully");
    history.push("/")



    };
    
    return (
        <div className="container">
        <div className="row">
           <h1 className="display-3 my-5 text-center">
               Add task
             </h1>
            <div className="col-md-6 shadow mx-auto p-5">
             <form onSubmit={handleSubmit}>
                 <div className="form-group p-2">
                     <input type="text" placeholder="Task" className="form-control"
                     value={task} onChange={e=>setTask(e.target.value)}/>
                 </div>

                 <div className="form-group p-2">
                     <input type="text" placeholder="Date" className="form-control"
                     value={date} onChange={e=>setDate(e.target.value)}/>
                 </div>

                 <div className="form-group p-2">
                     <input type="text" placeholder="Time" className="form-control"
                     value={time} onChange={e=>setTime(e.target.value)}/>
                 </div>

                 <div className="form-group">
                     <input type="submit" value="Add Task" className="btn btn-block btn-dark"/>
                 </div>
             </form>
            </div>

        </div>
        
    </div>
    )
}

export default Addtask
