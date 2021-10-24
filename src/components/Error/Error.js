import React from 'react';
import './Error.css';

const Error = ({ error }) => {

return (
    <section className="error-msg">
        <h2>{ error }, This is wrong! Do it the rigth way</h2>
    </section> 
)

}

export default Error;