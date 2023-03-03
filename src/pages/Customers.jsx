import React, { useState, useEffect } from 'react';
import CustomerProfilePage from './Profile';


const Customer = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/getUsers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  // const handleRowClick = (user) => {
  //   setSelectedUser(user);
  // };
  const handleRowClick = (user) => {
    setSelectedUser(user);
    //history.push(`/profile?id=${user.id}`);
  };
  

  const heading = ["Name", "Email"];
  const body = users.map((user) => [user.name, user.email]);

  return (
    <div>
      <table style={{borderCollapse: 'collapse',
                      margin: '25px 0',
                      fontSize: '0.9em',
                      fontFamily: 'sansSerif',
                      minWidth: '400px',
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'
                      }}>
        <thead>
          <tr style={{backgroundColor: '#009879',
                      color: '#ffffff',
                      textAlign: 'left'}}>
            {heading.map((head) => (
              <th key={head} style={{padding: '24px 60px'}}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{borderBottom: '1px solid #dddddd'}}>
          {body.map((row, index) => (
            <tr key={index} style={{borderBottom: '1px'}}>
              <td style={{padding: '24px 60px'}}>
                <a href={'#'} onClick={() => handleRowClick(users[index])}>{row[0]}</a>
              </td>
              {row.slice(1).map((val, i) => (
                <td key={i} style={{padding: '24px 60px'}}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && <CustomerProfilePage users={users} />}
    </div>
  );
};

export default Customer;
