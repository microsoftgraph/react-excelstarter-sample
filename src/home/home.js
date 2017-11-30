import React, { Component } from 'react';
import hello from 'hellojs/dist/hello.all.js';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    const msft = hello('msft').getAuthResponse();

    this.state = {
      me: "",
      successMessage: "",
      token: msft.access_token
    };

    this.onWriteToExcel = this.onWriteToExcel.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    const { token } = this.state;
    axios.get(
      'https://graph.microsoft.com/v1.0/me?$select=displayName,mail,userPrincipalName',
      { headers: { Authorization: `Bearer ${token}` }}
    ).then(res => {
      const me = res.data;
      this.setState({ me });
    });
  }

  onWriteToExcel() {
    const { token, me } = this.state;

    const myEmailAddress = me.mail || me.userPrincipalName;
    const values = [];

    values.push([me.displayName, myEmailAddress]);

    axios
      .post('https://graph.microsoft.com/v1.0/me/drive/root:/demo.xlsx:/workbook/tables/Table1/rows/add',
        { index: null, values },
        { headers: { Authorization: `Bearer ${token}` }}
      )
      .then(res => { 
                      console.log(res);
                      const successMessage = "Successfully wrote your data to demo.xlsx!";
                      this.setState ({ successMessage });
                     })
      .catch(err => console.error(err));
  }

  onLogout() {
    hello('msft').logout().then(
      () => this.props.history.push('/'),
      e => console.error(e.error.message)
    );
  }

  renderMe() {
    const { me } = this.state;
    const myEmailAddress = me.mail || me.userPrincipalName;

    return (
        <tr>
          <td>{me.displayName}</td>
          <td>{myEmailAddress}</td>
        </tr>
    );
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMe()}
          </tbody>
        </table>

        <button onClick={this.onWriteToExcel}>Write to Excel</button>
        <button onClick={this.onLogout}>Logout</button>
        <p>{this.state.successMessage}</p>
      </div>
    );
  }
}

export default Home;
