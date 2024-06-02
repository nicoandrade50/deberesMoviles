import React from 'react';
import { faker } from '@faker-js/faker';

const generateEmployees = (num: number) => {
    return Array.from({ length: num }, () => ({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        position: faker.name.jobTitle(),
        email: faker.internet.email(),
    }));
};

const employees = generateEmployees(10);

const EmployeeList: React.FC = () => {
    return (
        <div>
            <h2>Employees</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <h3>{employee.name}</h3>
                        <p>Position: {employee.position}</p>
                        <p>Email: {employee.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
