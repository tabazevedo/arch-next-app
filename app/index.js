import { createApplication } from 'arch-next/client';
import { route } from 'arch-next';
import React from 'react';

class SomeRoute extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}

const routes = [
  route('*', SomeRoute)
];

export default createApplication(routes);
