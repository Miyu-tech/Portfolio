import { useState } from 'react';
import TodoInput from './componets.TodoInput';
import TodoList from './componets/TodoList';

export default function App () {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
setTodo = ([...todos, { id: Date.now(), text, completed: false}]);
  };

  cont toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed } : todo)
    );
  };
};






































// import React from 'react';
// import { GlobalProvider } from './context/GlobalState';
// import { Balance } from './Components/Balance';

// function App() {
//   return (
//     <GlobalProvider>
//       <div className='container'>
//         <h2>Expence Tracker (Practice)</h2>
//         <Balance />
//       </div>
//     </GlobalProvider>
//   );
// }


// export default App;

















// import logo from './logo.svg';
// import './App.css';

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

// export default App;
