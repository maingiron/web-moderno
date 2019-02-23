import React from 'react'
import './Nav.css'
import NavItem from './NavItem'

export default props => 
  <aside className="menu-area">
    <nav className="menu">
      <NavItem url="#/" icon="home" title="Início" />
      <NavItem url="#/users" icon="users" title="Usuários" />
      {/* <a href="#/">
        <i className="fa fa-home"></i> Início
      </a>
      <a href="#/users">
        <i className="fa fa-users"></i> Usuários
      </a> */}
    </nav>
  </aside>
