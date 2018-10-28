import React, { Component } from 'react';
import hello from 'hellojs/dist/hello.all.js';

import { Configs } from '../configs';

function onLogin() {
  hello('msft').login({ scope: Configs.scope })
    .then(
    () => this.props.history.push('/home'),
    e => console.error(e.error.message)
  );
}

function Login() {
  return (
    <div>
      <button onClick={onLogin}>Sign in with your Microsoft account</button>
    </div>
  );
}

export default Login;
