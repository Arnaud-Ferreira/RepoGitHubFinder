import React from 'react';
import logo from '../../styles/logo-github.png';
import './style.scss';

export default function Header() {
    return (
        <header className="header">
          <img src={logo} alt="GitHub Logo"/>
        </header>
    );
}