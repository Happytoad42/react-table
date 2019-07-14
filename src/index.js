import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  deleteRow = (event) => {
    const data = [...this.state.data];
    data.splice(event.target.dataset.index, 1);
    this.setState({      
      data: data
    });
  };
  
  componentDidMount() {
    const data = require('./data.json');
    console.log(data);
    if (data !== undefined) {
      this.setState({
        data: data
      })
    }
  }

  render() {
   
    const rows = this.state.data.map((row, i) => {
      return (
        <tr key={i}>
          <td >{row.name}</td>
          <td >{row.id}</td>
          <td >{row.phone}</td>
          <td >{row.age}</td>
          <td><button data-index={i} onClick={this.deleteRow}>Delete row</button></td>
        </tr>
      );
    });
    
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Id</td>
            <td>Phone</td>
            <td>Age</td>
            <td></td>            
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }

 
}

ReactDOM.render(<App />, document.getElementById('root'));


