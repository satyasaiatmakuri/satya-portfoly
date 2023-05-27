import React from 'react';

function Error({ statusCode }) {
  return (
    <div>
      <h1>{statusCode ? `An error ${statusCode} occurred on the server` : 'An error occurred on the client'}</h1>
      {/* Customize the design and content of the 404 page */}
      <p>Sorry, the page you are looking for could not be found.</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
