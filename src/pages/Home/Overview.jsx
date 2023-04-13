import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <>
            <p>Pinned</p>
            <div className="owerCard col-md-8 rounded" style={{border:'1px solid #d0d7de',  padding:'15px', fontSize:'14px', letterSpacing:'0.8px'}}>
                <div className="d-flex align-items-center linkRepo gap-2">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo mr-1 color-fg-muted">
                        <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    <Link>JavaScript-sikl-masala</Link>
                    <span className='fw-bolder px-2'  style={{border:'1px solid #d0d7de', fontSize:'12px', borderRadius:'15px'}}>Public</span>
                </div>
                <div className="web_lang d-flex align-items-center gap-2 mt-3">
                    <div className="lang_color rounded-circle" style={{width:'12px', height:'12px', background:'#f1e05a'}}>
                    </div>
                    JavaScript
                </div>
            </div>
        </>
    );
};

export default Overview;