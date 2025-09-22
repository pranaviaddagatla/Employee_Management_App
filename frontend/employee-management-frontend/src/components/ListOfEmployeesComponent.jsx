import React, { Component, useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

function ListOfEmployeesComponent() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees().then((res) => {
      console.log(res.data);
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email Id</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td> {employee.first_name} </td>
                <td> {employee.last_name}</td>
                <td> {employee.email_id}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListOfEmployeesComponent;
