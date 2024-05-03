import React from 'react';

export default function Welcome(props) { // can also do Welcome({name})
    if (props.isLoggedIn)
        return <h1>Hello, {props.name}.</h1>;
    else 
        return <h1>Login please.</h1>;
  }
  