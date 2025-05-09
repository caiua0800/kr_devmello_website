// kr-landing-page/src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>Transforme sua ideia em realidade com a <span>KR</span></h1>
          <p>Somos uma software house especializada em tirar projetos do papel, desenvolvendo soluções digitais sob medida para o seu negócio. Da concepção ao lançamento, nossa equipe te acompanha em cada etapa, garantindo inovação, agilidade e tecnologia de ponta.</p>
          <ul className={styles.heroList}>
            <li>Desenvolvimento web, mobile e sistemas personalizados</li>
            <li>Consultoria tecnológica e validação de ideias</li>
            <li>Time experiente e focado em resultado</li>
          </ul>
        </div>
        <img src="img/logo.png" alt="Futuristic illustration" className={styles.heroImg} />
      </div>
    </section>
  );
}