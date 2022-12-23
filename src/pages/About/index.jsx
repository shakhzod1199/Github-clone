import React, { useRef } from 'react';
import "./style.scss";
const index = () => {
   const toggleRef = useRef();

   const Toggle = (e) => {
      switch(e){
         case 'open': toggleRef.current.classList.remove('d-none'); break;
         case 'close': toggleRef.current.classList.add('d-none'); break;
         case 'toggle': toggleRef.current.classList.toggle('d-none'); break;
         default: console.log(toggleRef.current);break;
      }
   }

   return (
      <div className='container mx-auto my-4 '>
         <div className="buttons d-flex justify-content-center ">
            <button className="btn btn-success m-3" onClick={() => Toggle('open')}>Open</button>
            <button className="btn btn-danger m-3 " onClick={() => Toggle('close')}>Close</button>
            <button className="btn btn-primary m-3" onClick={() => Toggle('toggle')}>Toggle</button>
         </div>
         <br />
         <div ref={toggleRef} className="card text-center shadow w-50 mx-auto my-4 p-5 bg-secondary text-white ">
            <h1>Toggle box</h1>
         </div>
      </div>
   );
};

export default index; <h1>About</h1>