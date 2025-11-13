import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import { Balance } from './Components/Balance';

function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        <h2>Expence Tracker (Practice)</h2>
        <Balance />
      </div>
    </GlobalProvider>
  );
}


export default App;

















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
