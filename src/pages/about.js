import React from "react"
import Header from "./../components/header"

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    if(this.state.isToggleOn === true){
    return (
      <>
      <div>
        <div>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button> 
        </div>
        <div>
      <Clock /> 
      </div>
    </div>
    </>
    )
    } else {
      return (
        <div>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
          <p>No time...</p>
        </div>
      ) 
    }
  }
}

class Clock extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}



const name = 'Tom D';
export default () => (  
  <div>
    <Header />
    <h1>About me {name}</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    <Toggle />
  </div>
)

