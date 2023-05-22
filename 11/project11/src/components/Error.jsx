import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="col-md-6 mx-auto">
                <div className="mt-5 text-center">
                    <h1 className="display-4">Oops!</h1>
                    <p className="lead">Something went wrong.</p>
                    <p className="text-muted">We apologize for the inconvenience.</p>
                    <h3><Link to='/'>Go To Home Page</Link></h3>
                </div>
                </div>
    );
};

export default Error;