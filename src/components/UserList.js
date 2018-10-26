import React from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Tablerow from './Tablerow';

const UserList = ( props ) => (
    <Table compact celled definition size='small'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Select</Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Website</Table.HeaderCell>
                <Table.HeaderCell>Company</Table.HeaderCell>
                <Table.HeaderCell>Adress</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Tablerow users={props.data.users} oncheck={props.onselectrow}/>
        </Table.Body>
    </Table>
);
export default UserList;
