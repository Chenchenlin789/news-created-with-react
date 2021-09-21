import './App.css';
import React, { Component } from 'react'
import News from './Components/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }
  render() {
    return (
      <div>
        <News />
        {/* <button onClick={() => this.setState({ isShow: !this.state.isShow })}>toggle is Show</button>
        {this.state.isShow === true ? <News /> : null} */}
      </div>

    )
  }
}

export default App;
