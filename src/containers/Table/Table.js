import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];

class Table extends Component {

    render() {
        return(
                <BootstrapTable data={products} version='4' striped hover>
                    <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
        );       
    }
}

export default Table;