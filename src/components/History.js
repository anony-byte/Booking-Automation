import React, { useState } from 'react'
const History = (props) => {
  const history = props.data;
  return (
    <div className='history-container'>
      <h2 className='title'>History</h2>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Panel Name</th>
              <th>Sheet No</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr>
              <td>{item.panel_name}</td>
              <td>{item.sheet_no}</td>
              <td>{item.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
      </div>
  );
}

export default History; 