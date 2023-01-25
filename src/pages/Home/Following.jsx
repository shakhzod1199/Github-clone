import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../API/api';
import './style.scss'

const Following = () => {
    const [following, setFollowing] = useState([])
    useEffect(() => {
        api.getFollowing().then(res => setFollowing(res.data))
    }, [])


    return (
        <>
            {
                following.map(e => {
                    return (
                        <div key={e.id} className="repos owerCard d-flex justify-content-between align-items-start " style={{ borderBottom: '1px solid #d0d7de', padding: '30px 0px', fontSize: '14px', letterSpacing: '0.8px' }}>
                            <div>
                                <div className="d-flex align-items-start gap-4 linkRepo">
                                    <img src={e.avatar_url} alt="avatar" className='rounded-circle' style={{ width: '50px', height: '50px' }} />
                                    <Link
                                        onClick={() => window.location.replace(`https://github.com/${e.login}`)}
                                        target="_blank"
                                        style={{ fontSize: '30px !important'}}
                                        className='fs-6 text-black nav-link'>
                                        {e.name}{e.login}
                                    </Link>
                                </div>
                            </div>
                            <div className="starred d-flex btn-group">
                                <button className="btn btn-outline-secondary star">
                                    <span>
                                        Unfollow
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
};

export default Following;