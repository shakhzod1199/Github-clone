import React, { useRef, useState } from 'react';
import "./style.scss";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const index = () => {
   const titleRef = useRef();
   const dateRef = useRef();
   const [value, setValue] = useState([]);

   const Send = () => {
      if (titleRef.current.value.trim().length === 0 || dateRef.current.value.trim() === '') {
         toast.warning('Please fill title and deadline ...',{
            autoClose:1000
         })
      }
      else {
         const newValue = {
            id: uuidv4(),
            title: titleRef.current.value.trim(),
            deadline: dateRef.current.value.trim()
         }
         setValue([...value, newValue])
         toast.success('Success add deadline in Task',{
            autoClose:2000
         })
         titleRef.current.value = '';
         dateRef.current.value = '';
      }
   }

   const removeTask = (id) => {
      const filterValue = value.filter(e => {
         return e.id != id;
      })
      setValue(filterValue);
      toast.error('Success remove deadline in task')
   }

   return (
      <>
         <ToastContainer />
            <div className="container">
               <div className="card shadow p-4 mx-auto w-50 my-3">
                  <label htmlFor="name">
                     <span>Title</span>
                     <input ref={titleRef} type="text" className="form-control p-2" id='name' placeholder='Enter title...' required />
                  </label>
                  <label htmlFor="date" className='my-2'>
                     <span>Date</span>
                     <input ref={dateRef} type="date" className="form-control p-2 mxy" id='date' required />
                  </label>
                  <button onClick={() => Send()} className="btn btn-primary p-2 my-3">Send</button>
               </div>
               <table className='table shadow-lg table-striped table-hover  text-center align-middle'>
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Deadline</th>
                        <th>Remove</th>
                     </tr>
                  </thead>
                  <tbody>
                     {value.map(e => {
                        return (
                           <tr key={e.id}>
                              <td>{e.id}</td>
                              <td>{e.title}</td>
                              <td>{e.deadline}</td>
                              <td><button onClick={() => removeTask(e.id)} className="btn btn-danger">Remove</button></td>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
            </div>
      </>
   );
};

export default index;