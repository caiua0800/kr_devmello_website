import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="img/logo.png" alt="KR Logo" className={styles.logoImg} />
      <nav>
        <a href="#agenteia">Agente de IA</a>
        <a href="#whitelabel">Whitelabel</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
} 