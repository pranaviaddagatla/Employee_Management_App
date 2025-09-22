package com.internal.employee_management_app.controller;

import com.internal.employee_management_app.model.Employee;
import com.internal.employee_management_app.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/home")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @RequestMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
}
