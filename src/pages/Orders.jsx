import React from 'react'
//date time to from status PackingHelp
const Order = () => {
  var heading = ["Date", "Time", "Customer", "To", "From", "Status", "PackingHelp"];
  var body = [
    ["01/24/2022", "17:04", "Gale Botteicher", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"],
    ["01/24/2022", "17:04", "Michael Jackson", "5636 Juan Tabo Apt#6", "386600 Fremont Blvd Unit#32", "Delivered", "No help"]
    
  ];
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
              <th style={{padding: '24px 30px'}}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{borderBottom: '1px solid #dddddd'}}>
          {body.map((row) => (
            <tr style={{borderBottom: '1px'}}>
              {row.map((val) => (
                <td style={{padding: '24px 30px'}}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Order