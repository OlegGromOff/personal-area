import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  };
  render() {
    return (
      <div className="sidebar-wrapper">
        <ul className="sidebar">
          <li><span><b>Мой кабинет</b></span></li>
          <li><NavLink to="/" className="link">Личные данные</NavLink></li>
          <li><NavLink to="/basket" className="link">Корзина</NavLink></li>
          <li><NavLink to="/order" className="link">Мои заказы</NavLink></li>
        </ul>
      </div>
    )
  }
}