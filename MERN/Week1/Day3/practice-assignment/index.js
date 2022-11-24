import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const hello='Hello Dojo!'
const thing = 'Things Ineed to do:'
const todo= ['Learn React','Climb Mt.Everest','Run a marathon',"Feed the dogs"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  <h1>{hello}</h1>
  <h3>{thing}</h3>
  <ul>{todo.map(element=><li>{element}</li>)}</ul>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
