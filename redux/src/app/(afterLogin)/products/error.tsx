"use client";

import React from 'react';

interface ErrorProps {
    error: any;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default Error;
