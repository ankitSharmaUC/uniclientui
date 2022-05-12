import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-dark bd-grey navbar-expand-md'>
            <div>Client Info</div>
          </nav>
        </header>
      </div>
    )
  }
}
