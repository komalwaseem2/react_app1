import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import WelcomeClass from './WelcomeClass';
import LoginControl from './LoginControl';
import reportWebVitals from './reportWebVitals';
import NameForm from './Form';
import FlavorForm from './SelectForm';
import FilterableProductList from './FilterableProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterableProductList></FilterableProductList>
    {/* <LoginControl></LoginControl>
    <WelcomeClass name="Komal" />
    <NameForm></NameForm>
    <FlavorForm></FlavorForm> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
