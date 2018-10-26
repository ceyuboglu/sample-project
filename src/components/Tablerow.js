import React from 'react';
import {  Checkbox,  Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Tablerow = ( props ) => (
    props.users.map(user =>
        <Table.Row key={user.id}>
                <Table.Cell collapsing>
                    <Checkbox slider onClick={()=>props.oncheck(user.id)}/>
                </Table.Cell>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phone}</Table.Cell>
                <Table.Cell>{user.website}</Table.Cell>
                <Table.Cell>{user.company.name}</Table.Cell>
                <Table.Cell>{user.address.city}</Table.Cell>
        </Table.Row>
    )
);
export default Tablerow;
