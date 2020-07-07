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
          <li><NavLink to="/main-data">Личные данные</NavLink></li>
          <li><NavLink to="/basket">Корзина</NavLink></li>
          <li><NavLink to="/order">Мои заказы</NavLink></li>
        </ul>
      </div>
    )
  }
}