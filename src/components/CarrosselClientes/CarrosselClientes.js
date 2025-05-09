import React from 'react';
import styles from './CarrosselClientes.module.css';

const logos = [
  "img/logo.png",
  "img/hotspot-white-label-mambo-wifi.png",
  "img/agenteAi.png",
  // Adicione mais logos aqui
];

const logosLoop = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

export default function CarrosselClientes() {
  return (
    <section className={styles.carouselSection}>
      <div className={styles.title}>Nossos Clientes</div>
      <div className={styles.carouselInner}>
        <div className={styles.track}>
          {logosLoop.map((logo, idx) => (
            <img src={logo} alt="Logo cliente" className={styles.logoItem} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
} 