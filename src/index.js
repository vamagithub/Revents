import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/style.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';


const rootEl = ReactDOM.createRoot(document.getElementById('root'));
function render(){
  rootEl.render(
    <App/>
  )
}

// _____________________________ ?? HOT MODULE REPLACEMENT ___________________________________


if(module.hot){
  module.hot.accept('./app/layout/App', function(){
    setTimeout(render);
  })
}

render();

// ______________________________ ?? HOT MODULE REPLACEMENT ___________________________________



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log("PERFORMANCE"));
