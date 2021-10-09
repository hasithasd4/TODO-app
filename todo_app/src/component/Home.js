import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const Home = () => {
    const tasks = useSelector((state)=>state);
    const dispatch =useDispatch();
    const deletetask=(id)=>{
        dispatch({type:"DELETE_TASK",payload:id});
        toast.success("Task deleted successfully");

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to="/add" className="btn btn-outline-dark">ADD TASK</Link>

                </div>
                <div className="col-md-6 mx-auto">
                    <table className="table table-hover">
                        <thead className= "text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Task</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Action</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((taskd,id)=>(
                                    <tr key={id} className= "text-center">
                                          <td>{id +1}</td>
                                          <td>{taskd.task}</td>
                                          <td>{taskd.date}</td>
                                          <td>{taskd.time}</td>
                                          <td>
                                              <button type="button" onClick={()=>deletetask(taskd.id)} className="btn btn-small btn-danger">Delete</button>
                                          </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            
        </div>
    )
}


export default Home

