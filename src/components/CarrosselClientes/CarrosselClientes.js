import React from 'react';
import styles from './CarrosselClientes.module.css';

const logos = [
  "img/Untitled__2160_x_1080_px___445_x_251_px_-removebg-preview.png",
  "img/WhatsApp Image 2025-06-03 at 14.06.36 (1).jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.36.jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.37 (1).jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.37 (2).jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.37 (3).jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.37.jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.38 (1).jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.38 (2).jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.38 (3).jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.38.jpeg",
  "img/WhatsApp Image 2025-06-03 at 14.06.39.jpeg",
];

const logosLoop = [...logos, ...logos];

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