import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="d-flex text-info justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner animation="border" role="status"></Spinner>
        </div>
  );
    
};

export default Loading;