import React from 'react';
import Menu from '../Menu';
import logo from '../../styles/logo-github.png';
import './style.scss';

export default function Header() {
    return (
        <header className="header">
          <div className="search-header__title">
          <img src={logo} alt="GitHub Logo"/>
          <h1 className="sitename">Repo Finder</h1>
          </div>
          <Menu />
        </header>
    );
}