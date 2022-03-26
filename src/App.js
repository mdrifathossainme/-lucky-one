import logo from './logo.svg';
import './App.css';
import Header from './commponent/Header/Header';
import Shop from './commponent/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>

      <div className='question'>
        <h1>1.How React works ?</h1>
        <p>At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.
        Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
        <h1>2.How work useState</h1>
        <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value  and another function to update this value.</p>

        <h1>3.State Vs. Props</h1>
        <p> 
          <h4>State</h4>
          The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
        </p>
        <p>
          <h4>Props</h4>
          Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
        </p>
      </div>
    </div>
  );
}

export default App;
