import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

import Cell from '../../component/Cell/DescCell';


class BasicTable extends Component {
  
    state = {
        mods: this.props.data,
        columns: [{
            dataField: 'name',
            text: 'Name',
            sort: true
        },{
            dataField: 'description',
            text: 'Description',
            sort: true,
            formatter: (cell) => {
                return (
                    <Cell contents = {cell}/>
                );
            }
        },{
            dataField: 'type',
            text: 'Type',
            sort: true
        },{
            dataField: 'polarity',
            text: 'Polarity',
            sort: true
        },{
            dataField: 'rarity',
            text: 'Rarity',
            sort: true
        }]
    }

    
    render() {
        return (
            this.props.show ? <div className="container" style={{ marginTop: 50 }}>
                <BootstrapTable 
                striped
                hover
                keyField='name' 
                data={ this.state.mods } 
                columns={ this.state.columns }/>
            </div> : null
        );
    }
}

export default BasicTable;