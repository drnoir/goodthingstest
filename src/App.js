
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";
import logo from './logo.svg';

import './App.css';
import _ from 'lodash';


//Custumer Data
var customer_orders = [
  { 
      order_number:  1, 
      customer: 'Jess Learmonth',    
      total_cost: 200,    
      processed_date: '23/01/2016' 
  },
  { 
      order_number: 14, 
      customer: 'Adam Bowden',       
      total_cost: 100,    
      processed_date: '22/01/2016' 
  }
];


class App extends Component {
  render() {

    //Lodash orders by field values and stored in var
    var orderProcessedData = _.orderBy(customer_orders, [' customer', 'processed_date', 'order_number'], ['asc']);
    
    //render JSX - *Bootstrap table CSS not working - popper js error?
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Good Things Junior Dev Test</h1>
        </header>
        <h2>Ordered Table - ordered by custumer, date and order number ascending</h2>
    
        <BootstrapTable data={ orderProcessedData } version='4' striped hover condensed >
          <TableHeaderColumn dataField='order_number' isKey>Order Number</TableHeaderColumn>
          <TableHeaderColumn dataField='customer'>Customer Name</TableHeaderColumn>
          <TableHeaderColumn dataField='processed_date'>Date of Order</TableHeaderColumn>
      </BootstrapTable>

        <h2>Money spent Chart</h2>
        <Chart data={customer_orders}>
          <Axis primary type="time" position="bottom" />
          <Axis type="linear" position="left" />
          <Series type={Line} />
          <Cursor primary />
          <Cursor />
          <Tooltip />
        </Chart>
        
      </div>
    );
  }
}

export default App;
