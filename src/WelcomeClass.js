import React from 'react';


export default class WelcomeClass extends React.Component {

    constructor(props){
        super(props);

        this.state={timer: new Date(), isToggleOn: true};
    }

    tick=()=> {
        this.setState({
          timer: new Date()
        });
      }

    componentDidMount() {
        this.timerID = setInterval(
            this.tick,
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      handleClick=()=> {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {
      return <>
        <h1>Hello, {this.props.name}</h1>
        <h2>It is {this.state.timer.toLocaleTimeString()}.</h2>
        <NumberList numbers={[1,2,3,"apple"]}></NumberList>
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </>;
    }
  }

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }