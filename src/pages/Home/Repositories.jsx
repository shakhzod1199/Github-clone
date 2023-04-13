import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../API/api';
import './style.scss'

const repositories = () => {
    const [repos, setRepos] = useState([])
    const [langs, setLangs] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const [count, setCount] = useState(1);

    useEffect(() => {
        api.getRepositories().then(res => setRepos(res.data))
    }, [])

    const searchRepo = repos.filter(e => {
        return e.name.toLowerCase().includes(value.toLowerCase())
    })
    const TypeRepo = searchRepo.filter(e => {
        return type != ' ' ? e.visibility.toLowerCase().includes(type.toLowerCase()) : '';
    })
    const Lang = TypeRepo.filter(e => {
        return langs.toLowerCase() === 'all' ? e : langs != '' ? e.language?.toUpperCase() === langs.toUpperCase() : 'NotFound';
    })

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const point = 2;
    const lastItem = point * count;
    const lastPage = lastItem - point;

    const step = []
    for (let i = 1; i <= Math.ceil((Lang.length) / (point)); i++) {
        step.push(i)
    }
    const paginatRepo = Lang.slice(lastPage, lastItem);

    return (
        <div className='d-flex flex-column align-content-between'>
            <div>
                <form className='formRepo gap-4'>
                    <div className="form-filter gap-4 col-md-10">
                        <input type="search" className="form-control" placeholder='Find a repository...' onChange={(e) => setValue(e.target.value)} />
                        <div className="drpFilter d-flex gap-2">
                            <div className="dropdown type">
                                <button
                                    className="btn btn-secondary text-black text-capitalize dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Type
                                </button>
                                <ul className="dropdown-menu border" aria-labelledby="dropdownMenuButton">
                                    <li className="dropdown-item border-bottom  disabled">Select type</li>
                                    <li value='' className="dropdown-item border-bottom" onClick={(e) => setType(e.target.innerText)} >All</li>
                                    <li value='public' className="dropdown-item border-bottom" onClick={(e) => setType(e.target.innerText)} >Public</li>
                                    <li value='private' className="dropdown-item border-bottom" onClick={(e) => setType(e.target.innerText)} >Private</li>
                                    <li value='sources' className="dropdown-item border-bottom" onClick={(e) => setType(e.target.innerText)} >Sources</li>
                                    <li value='forks' className="dropdown-item border-bottom" onClick={(e) => setType(e.target.innerText)} >Forks</li>
                                    <li value='archived' className="dropdown-item border-bottom" onClick={(e) => setType(e.target.innerText)} >Archived</li>
                                    <li value='mirrors' className="dropdown-item border-bottom" onClick={(e) => setType(e.target.innerText)} >Mirrors</li>
                                    <li value='templates' className="dropdown-item" onClick={(e) => setType(e.target.innerText)} >Templates</li>
                                </ul>
                            </div>
                            <div className="dropdown lang">
                                <button
                                    className="btn btn-secondary text-black text-capitalize dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Language
                                </button>
                                <ul className="dropdown-menu border select" aria-labelledby="dropdownMenuButton" >
                                    <li className="dropdown-item border-bottom  disabled">Select language</li>
                                    <li value='' selected className="dropdown-item border-bottom" onClick={(e) => (setLangs(e.target.innerHTML))}>All</li>
                                    <li value='javascript' className="dropdown-item border-bottom" onClick={(e) => (setLangs(e.target.innerHTML))}>JavaScript</li>
                                    <li value='css' className="dropdown-item" onClick={(e) => (setLangs(e.target.innerHTML))}>Css</li>
                                </ul>
                            </div>
                            <div className="dropdown sort">
                                <button
                                    className="btn btn-secondary text-black text-capitalize dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sort
                                </button>
                                <ul className="dropdown-menu border" aria-labelledby="dropdownMenuButton" >
                                    <li className="dropdown-item border-bottom  disabled">Select order</li>
                                    <li className="dropdown-item border-bottom">Last updated</li>
                                    <li className="dropdown-item border-bottom">Name</li>
                                    <li className="dropdown-item">Stars</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="newRepo d-flex justify-content-end col-md col-12">
                        <button className="text-capitalize btn btn-success d-flex gap-2 w-100 justify-content-center" onClick={(e) => { e.preventDefault(), window.location.replace('https://github.com/new') }}>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo">
                                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                            </svg>
                            New
                        </button>
                    </div>
                </form>
                {
                    paginatRepo.map(el => {
                        const bgcolor = {
                            width: '12px',
                            height: '12px',
                            backgroundColor: el.language == 'CSS' ? 'purple' : 'yellow'
                        }
                        return (
                            <div key={el.id} className="repos owerCard d-flex justify-content-between align-items-center " style={{ borderBottom: '1px solid #d0d7de', padding: '30px 0px', fontSize: '14px', letterSpacing: '0.8px' }}>
                                <div>
                                    <div className="d-flex align-items-center linkRepo gap-2">
                                        <a href={el.html_url} style={{ fontSize: '30px !important' }} className='fs-5'>{el.name}</a>
                                        <span className='fw-bolder px-2' style={{ border: '1px solid #d0d7de', fontSize: '12px', borderRadius: '15px' }}>{el.private ? "Private" : "Public"}</span>
                                    </div>
                                    <div className="web_lang d-flex align-items-center gap-2 mt-3" style={{ fontSize: '12px' }}>
                                        <div className="lang_color rounded-circle" style={bgcolor}>
                                        </div>
                                        {el.language} <span >Updated on {monthNames[el.pushed_at.slice(5, 7) - 1].slice(0, 3)} {el.pushed_at.slice(8, 10)}, {el.pushed_at.slice(0, 4)}</span>
                                    </div>
                                </div>
                                <div className="starred d-flex btn-group" >
                                    <button className="btn btn-outline-secondary star">
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star d-inline-block mr-2">
                                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                        </svg>
                                        <span>star</span>
                                    </button>

                                    <button className="btn btn-outline-secondary down">
                                        <i className="fas fa-sort-down"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div aria-label="..." className='d-flex justify-content-center py-4' >
                <ul className="pagination gap-1">
                    { step.length> 2 ? step.map((el) => {
                            return (
                                <li key={el} className={`page-item ${el === count ? 'active' : ''}`} onClick={() => setCount(el)}>
                                    <a className="page-link" href="#">{el} <span className="visually-hidden">(current)</span></a>
                                </li>
                            )
                        })
                        : ''
                    }

                </ul>
            </div>

        </div>
    );
};

export default repositories;