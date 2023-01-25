import React from 'react';

const projects = () => {
    return (
        <div className="card border-card my-4 border">
            <div className="card-body text-center"><i className="fas fa-th-list fs-4"></i></div>
            <h2 className='card-title text-center'>Create your first GitHub project</h2>
            <p className="card-text text-center">Projects are a customizable, flexible tool for planning and tracking your work.</p>
            <button className="btn btn-success w-5 mb-5 mx-auto text-capitalize">New Project</button>
        </div>
    );
};

export default projects;