import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    data: [],
  };

  getData() {
    axios
      .get('https://corona.lmao.ninja/v2/countries/gh')
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch((err) => {});
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <h2>Ghana Covid Cases</h2>
        <table>
          <tr>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Recovered</th>
          </tr>
          <tr>
            <td>{this.state.data.cases}</td>
            <td>{this.state.data.deaths}</td>
            <td>{this.state.data.active}</td>
            <td>{this.state.data.recovered}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
