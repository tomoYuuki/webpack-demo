import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom/client';
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World',
    };
  }
  render() {
    return <div>{this.state.message}</div>;
  }
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);
