import React, { useEffect, useRef } from 'react';
import './Produtos.css';

export default function AgenteIA() {
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
    <section className="section" id="agenteia">
      <div className="content animatedContent" ref={sectionRef}>
        <div className="textContent">
          <h2>Agente de IA para Atendimento e Operações</h2>
          <p>Nosso agente de inteligência artificial é capaz de atender seus clientes 24h, realizar operações no seu software, agendar compromissos, efetuar compras, responder dúvidas e muito mais. Automatize processos, reduza custos e ofereça uma experiência inovadora para seus usuários.</p>
          <ul className="list">
            <li>Integração total com seu sistema</li>
            <li>Respostas rápidas e personalizadas</li>
            <li>Automação de tarefas repetitivas</li>
            <li>Escalabilidade para grandes volumes de atendimento</li>
          </ul>
        </div>
        <img src="img/agenteAi.png" alt="Produto agente IA" className="imgLarge" />
      </div>
    </section>
  );
} 