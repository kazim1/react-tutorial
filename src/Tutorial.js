import React from 'react';
import './App.css';

// const Greeting = () => <h1>Hello World!</h1>

const Greeting = (props) => {
  return (
    <h1>Hello {props.name}</h1>
  );
}

const Nav = () => {
  return (
    <ul>
      <NavLink label="Home" link="/home" />
      <NavLink label="About" link="/about" />
      <NavLink label="Contact" link="/contact" />
    </ul>
  )
};

const NavLink = (props) => {
  return (
    <li><a href={props.link}>{props.label}</a></li>
  );
};

// class MyComponent extends React.Component {

//   constructor(props) {
//     super(props);
//     console.log('calling constructor');
//     this.state = {
//       counter: 1
//     }
//   }

//   render() {
//     console.log('render')
//     return (
//       <div>
//         <p>Counter {this.state.counter}</p>
//         <button onClick={() => this.setState({counter: this.state.counter+1})}>Increase counter</button>
//       </div>
//     );
//   }

//   componentDidMount() {
//     console.log('when component rendered first time');
//   }

//   componentWillUnmount() {
//     console.log('when component gets removed');
//   }
// }

const MyComponent = () => {

  const [counter, setCounter] = React.useState(1);

  React.useEffect(() => {
    console.log('similar to component did mount');

    return () => {
      console.log('similar to component will unmount');
    }
    
  }, []);

  console.log('render');
  return (
    <div>
      <p>Counter {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Increase counter</button>
    </div>
  );

};

function Tutorial() {
  return (
    <div className="App">
      <Greeting />
      <MyComponent />
      <Nav />
    </div>
  );
}

export default Tutorial;
