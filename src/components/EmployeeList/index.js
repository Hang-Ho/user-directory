import React from 'react';

const EmployeeList = (props) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" onClick={() => props.handleClick("first")}>First</th>
        <th scope="col" onClick={() => props.handleClick("last")}>Last</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope='col'>Picture</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{++index}</th>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.email}</td>
            <td>{item.cell}</td>
            <td><img src={item.picture.thumbnail} alt="" /></td>
          </tr>
        )
      })}
    </tbody>
  </table>
);
export default EmployeeList;