import React from 'react'
import Nav from '../Nav';

export default function Layout(props){
  return(
    <React.Fragment>
      <Nav></Nav>

      <main className="main-content">
        {props.children}
      </main>
    </React.Fragment>
  );
}