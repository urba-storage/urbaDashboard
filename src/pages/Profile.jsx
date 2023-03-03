import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const CustomerProfilePage = ({ users }) => {
  const location = useLocation();
  const { id } = queryString.parse(location.search);
  const selectedUser = users.find((user) => user.id === parseInt(id));

  return (
    <div>
      <h1>Profile Page</h1>
      {selectedUser ? (
        <>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone Number: 510-654-7563</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerProfilePage;

