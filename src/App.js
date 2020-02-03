import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    text: '',
    textLength: 0
  };
  getLengthText = (event) => {
    // console.log(event.target.value.length);
    this.setState({
      text: event.target.value
    }, () => {});
  }
  deleteCharHandler = (index) => {
    const listChar = [...this.state.text.split('')];
    listChar.splice(index, 1);
    this.setState({
      text: listChar.join('')
    });
  }
  render() {
    const listChars = [...this.state.text.split('')].map((char, index) => {
      return (
        <Char 
        key={index}
        char={char}
        clicked={() => this.deleteCharHandler(index)}
        ></Char>
      );
    });
    return (
      <div className="App">
        <input type="text" onChange={this.getLengthText} value={this.state.text}></input>
        <p>{this.state.text}</p>
        <Validation textLength={this.state.text.length}></Validation>
        {listChars}
      </div>
    );
  }
}

export default App;
