import React, { useState, useEffect } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { api } from '../../API/api';
import "./style.scss";

const index = () => {

   const [data, setData] = useState([])
   const [value, setValue] = useState('')

   useEffect(() => {
      api.getUser().then(res => setData(res.data))
   }, [])

   const handleKey = (e) => {
      if (e.key == 'Enter') {
         if(value != ''){
            return location.replace(`https://github.com/search?q=${value}`)
         }
      }
   }

   return (

      <nav className="navbar navbar-expand-lg py-3">
         <div className="container-fluid container">
            <button
               className="navbar-toggler text-white"
               type="button"
               data-mdb-toggle="collapse"
               data-mdb-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <i className="fas fa-bars"></i>
            </button>
            <div className="nav-logo">
               <NavLink to='\github.com' className='logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
               </NavLink>
            </div>
            <ul className='d-flex align-items-center d-lg-none p-0 m-0'>
               <i className="far fa-bell fs-5"></i>
            </ul>
            <div className="collapse navbar-collapse conatiner col-md-10 px-0" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-relative">
                  <div className='search_nav position-relative'>
                     <input
                        type="search"
                        value={value}
                        onKeyDown={(e) => handleKey(e)}
                        onChange={(e) => setValue(e.target.value)}
                        className='form-control bg-transparent text-white p-0'
                        placeholder='Search ot jump to...' />
                  </div>
                  <li className='nav-item first_item'><Link to="#" className="nav-link text-white" onClick={() => { location.replace('https://github.com/pulls') }} >Pull request</Link></li>
                  <li className='nav-item'><Link to="#" className="nav-link text-white" onClick={() => { location.replace('https://github.com/issues') }} >Issues</Link></li>
                  <li className='nav-item'><Link to="#" className="nav-link text-white" onClick={() => { location.replace('https://github.com/codespaces') }} >Codespaces</Link></li>
                  <li className='nav-item'><Link to="#" className="nav-link text-white" onClick={() => { location.replace('https://github.com/marketplace') }} >Marketplace</Link></li>
                  <li className='nav-item'><Link to="#" className="nav-link text-white" onClick={() => { location.replace('https://github.com/explore') }} >Explore</Link></li>
                  <li className='nav-item d-lg-none'><Link to="#" className="nav-link text-white" onClick={() => { location.replace('https://github.com/sponsors/accounts') }} >Sponsors</Link></li>
                  <li className='nav-item d-lg-none'><Link to="#" className="nav-link text-white" onClick={() => { location.replace('https://github.com/settings/profile') }} >Settings</Link></li>
                  <li className='nav-item d-lg-none'>
                     <Link to="#" className="nav-link text-white d-flex align-items-center gap-1">
                        <img src={data.avatar_url} className="rounded-circle" alt="avatar_url" style={{ width: '25px', height: '25px' }} />
                        <span>{data.login}</span>
                     </Link>
                  </li>
                  <li className='nav-item d-lg-none'>
                     <Link to="#" className="nav-link text-white d-flex align-items-center gap-1">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Sign out</span>
                     </Link>
                  </li>
               </ul>
            </div>
            <ul className='nav_notification d-flex align-items-center d-none d-lg-flex m-0 p-0'>
               <i className="far fa-bell"></i>
            </ul>
            <div className="dropdown newEvent d-flex gap-1 mx-3 d-none d-lg-flex">
               <i className="fas fa-plus d-flex align-items-center db_toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
               </i>
               <div
                  className="dropdown-toggle d-flex align-items-center db_toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
               </div>
               <ul className="dropdown-menu border shadow" style={{ left: '-135px' }} aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">New repository</a></li>
                  <li><a className="dropdown-item" href="#">Import repository</a></li>
                  <li><a className="dropdown-item" href="#">New codespace</a></li>
                  <li><a className="dropdown-item" href="#">New gist</a></li>
                  <li><a className="dropdown-item" href="#">New organization</a></li>
                  <li><a className="dropdown-item" href="#">New project</a></li>
               </ul>
            </div>
            <div className="dropdown avatar_logo d-flex gap-1 align-items-center d-none d-lg-flex">
               <img src={data.avatar_url}
                  className="logo rounded-circle"
                  alt="avatar" style={{ width: '25px', height: '25px' }}
                  id="dropdownMenuButton2"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false" />
               <div className="dropdown-toggle db_toggle"
                  id="dropdownMenuButton2"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false" >
               </div>
               <ul className="dropdown-menu border shadow" style={{ left: '-125px' }} aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item border-bottom" href="#">Signed in as <h6>{data.login}</h6></a></li>
                  <li className='border-bottom d-flex justify-content-center py-2'>
                     <a href="#">
                        <button className="status btn btn-outline-secondary d-flex gap-2 align-items-center">
                           <i className="far fa-smile"></i>
                           <span className='text-capitalize' style={{ fontSize: '12px' }}>
                              Set status
                           </span>
                        </button>
                     </a>
                  </li>
                  <li><a className="dropdown-item" href="#">Your profile</a></li>
                  <li><a className="dropdown-item" href="#">Your repository</a></li>
                  <li><a className="dropdown-item" href="#">Your project</a></li>
                  <li><a className="dropdown-item" href="#">Your stars</a></li>
                  <li><a className="dropdown-item" href="#">Your gists</a></li>
                  <li><a className="dropdown-item border-bottom" href="#">Your sponsors</a></li>
                  <li><a className="dropdown-item" href="#">Upgrade</a></li>
                  <li><a className="dropdown-item" href="#">Try Enterprice</a></li>
                  <li><a className="dropdown-item" href="#">Feature preview</a></li>
                  <li><a className="dropdown-item" href="#">Help</a></li>
                  <li><a className="dropdown-item border-bottom" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Sing out</a></li>
               </ul>
            </div>
         </div>
      </nav>

   );
};

export default index;