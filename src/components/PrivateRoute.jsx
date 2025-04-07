// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = false;  // Set to `true` to allow access to children

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default PrivateRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if token exists
  const isAuthenticated = !!token; // true if token is not null

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

