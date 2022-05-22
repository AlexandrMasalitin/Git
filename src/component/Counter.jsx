import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'react-bootstrap'
import logo from "../logo.svg"

export default class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <Navbar>
          <NavbarBrand >
            <h1 className='navBrand'>Bootstrap is work</h1>
           <img src={logo} alt="/" />
          </NavbarBrand>
        </Navbar>
      </div>
    )
  }
}
