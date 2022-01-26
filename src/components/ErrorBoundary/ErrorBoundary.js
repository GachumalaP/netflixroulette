import React from 'react';

const ErrorBoundary = (props) => {
    let errors = true;

    const errorText = () => (
        <h2>Something went wrong...</h2>
    )

    return (
        <>
            {errors ? props.children : errorText()}
        </>
    );
}

export default ErrorBoundary;
