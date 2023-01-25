import React, { useEffect, useRef, useState } from 'react';
import "./style.scss";
import MainNavbar from '../../components/MainNavbar';
import { Outlet } from 'react-router-dom';
import ProfileEdit from '../../components/ProfileEdit'
import { api } from '../../API/api';



const index = () => {
   const [user, setUser] = useState([])

    useEffect(() => {
        api.getUser().then(res => setUser(res.data))
    }, [])

   return (
      <>
         <div className='Mainnav d-flex navRepo col-md-12'>
            <div className="col-md-3"></div>
            <div className="mainNavbar col-md-8 d-flex justify-content-center mx-2">
               <MainNavbar user={user} />
            </div>
         </div>
         <div className='d-flex flex-wrap gap-4 container justify-content-center position-relative'>
            <div className="profile col-md-3 col-sm-12 position-relative ">
               <ProfileEdit user={user} />
            </div>
            <div className='Mainnav d-flex  d-md-none w-100'>
               <div className="col-md-3"></div>
               <div className="mainNavbar col-md-8 d-flex justify-content-center mx-2">
                  <MainNavbar user={user} />
               </div>
            </div>
            <div className="outlet col-md col-sm-12">
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default index;