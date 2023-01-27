import React from 'react'
//date time to from status PackingHelp
const Customer = () => {
  var heading = ["Name", "Email", "Phone Number", "Unit"];
  var body = [
    ["Walter White", "heisenberg@polloshermanos.com", "510-878-9834", "#243"],
    ["Gustavo Fring", "gusfring@polloshermanos.com", "510-345-6787", "#128"],
    ["Walter White", "heisenberg@polloshermanos.com", "510-878-9834", "#243"],
    ["Gustavo Fring", "gusfring@polloshermanos.com", "510-345-6787", "#128"],
    ["Walter White", "heisenberg@polloshermanos.com", "510-878-9834", "#243"],
    ["Gustavo Fring", "gusfring@polloshermanos.com", "510-345-6787", "#128"],
    ["Walter White", "heisenberg@polloshermanos.com", "510-878-9834", "#243"],
    ["Gustavo Fring", "gusfring@polloshermanos.com", "510-345-6787", "#128"],
    ["Walter White", "heisenberg@polloshermanos.com", "510-878-9834", "#243"],
    ["Gustavo Fring", "gusfring@polloshermanos.com", "510-345-6787", "#128"],
    ["Walter White", "heisenberg@polloshermanos.com", "510-878-9834", "#243"],
    ["Gustavo Fring", "gusfring@polloshermanos.com", "510-345-6787", "#128"],
    ["Walter White", "heisenberg@polloshermanos.com", "510-878-9834", "#243"],
    ["Gustavo Fring", "gusfring@polloshermanos.com", "510-345-6787", "#128"]
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
              <th style={{padding: '24px 60px'}}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{borderBottom: '1px solid #dddddd'}}>
          {body.map((row) => (
            <tr style={{borderBottom: '1px'}}>
              {row.map((val) => (
                <td style={{padding: '24px 60px'}}>
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


export default Customer