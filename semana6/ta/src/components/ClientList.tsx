import React from 'react';
import { faker } from '@faker-js/faker';

const generateClients = (num: number) => {
    return Array.from({ length: num }, () => ({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
    }));
};

const clients = generateClients(10);

const ClientList: React.FC = () => {
    return (
        <div>
            <h2>Clients</h2>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        <h3>{client.name}</h3>
                        <p>Email: {client.email}</p>
                        <p>Phone: {client.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
