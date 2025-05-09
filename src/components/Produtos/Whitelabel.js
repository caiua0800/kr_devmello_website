import React, { useEffect, useRef } from 'react';
import './Produtos.css';

export default function Whitelabel() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (isVisible) {
          sectionRef.current.classList.add('visible');
        } else {
          sectionRef.current.classList.remove('visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="section" id="whitelabel">
      <div className="content animatedContent" ref={sectionRef}>
        <div className="textContent">
          <h2>Seu Sistema Whitelabel: Personalize e Escale</h2>
          <p>Oferecemos modelos de software whitelabel para você colocar sua marca em um sistema robusto, seguro e totalmente customizável. Ideal para empresas que querem agilidade, economia e tecnologia de alto nível sem abrir mão da identidade própria.</p>
          <ul className="list">
            <li>Personalização visual completa</li>
            <li>Funcionalidades sob medida</li>
            <li>Hospedagem e suporte inclusos</li>
            <li>Pronto para escalar com o seu negócio</li>
          </ul>
        </div>
        <img src="img/hotspot-white-label-mambo-wifi.png" alt="Produto Whitelabel" className="imgLarge" />
      </div>
    </section>
  );
} 