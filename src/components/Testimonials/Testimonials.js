import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const testimonialsRef = useRef([]);
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);
  const [financialCount, setFinancialCount] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Função de animação do contador - abordagem com setInterval
  const startCountAnimation = () => {
    // Reiniciar contador
    setCount(0);
    setFinancialCount(0);
    
    // Definir valores para contador de usuários
    const targetCount = 5000;
    const duration = 2000; // ms
    const steps = 100; // passos de animação
    const increment = targetCount / steps;
    const intervalTime = duration / steps;
    
    let currentCount = 0;
    
    // Usar setInterval em vez de requestAnimationFrame
    const intervalId = setInterval(() => {
      currentCount += increment;
      
      if (currentCount >= targetCount) {
        clearInterval(intervalId);
        setCount(targetCount);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, intervalTime);
    
    // Contador financeiro
    const targetFinancial = 40000000; // 12 milhões
    const financialDuration = 2500; // ms
    const financialSteps = 100;
    const financialIncrement = targetFinancial / financialSteps;
    const financialIntervalTime = financialDuration / financialSteps;
    
    let currentFinancial = 0;
    
    const financialIntervalId = setInterval(() => {
      currentFinancial += financialIncrement;
      
      if (currentFinancial >= targetFinancial) {
        clearInterval(financialIntervalId);
        setFinancialCount(targetFinancial);
      } else {
        setFinancialCount(Math.floor(currentFinancial));
      }
    }, financialIntervalTime);
    
    // Retornar uma função para limpar ambos os contadores
    return () => {
      clearInterval(intervalId);
      clearInterval(financialIntervalId);
    };
  };
  
  // Formatar valor financeiro em reais
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Efeito principal para detectar scroll e animar
  useEffect(() => {
    let cleanupCounters = null;
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      
      if (entry.isIntersecting && !hasAnimated) {
        // Marcar que começamos a animação
        hasAnimated = true;
        
        // Animar o título
        if (titleRef.current) {
          titleRef.current.classList.add(styles.visible);
        }
        
        // Animar os cards de depoimentos
        testimonialsRef.current.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add(styles.visible);
          }, 200 * index);
        });
        
        // Animar o contador
        if (counterRef.current) {
          counterRef.current.classList.add(styles.visible);
          cleanupCounters = startCountAnimation();
        }
      } else if (!entry.isIntersecting && hasAnimated) {
        // Resetar quando sair da tela
        hasAnimated = false;
        
        if (cleanupCounters) {
          cleanupCounters();
        }
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // 20% da seção visível ativa a animação
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      if (cleanupCounters) {
        cleanupCounters();
      }
    };
  }, []);
  
  // Função para adicionar elementos aos refs de cards
  const addToRefs = (el) => {
    if (el && !testimonialsRef.current.includes(el)) {
      testimonialsRef.current.push(el);
    }
  };
  
  // Handlers de mouse
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
    <section className={styles.testimonials} ref={sectionRef}>
      <div className={styles.testimonialsContainer}>
        <h2 className={styles.title} ref={titleRef}>
          Resultados <span className={styles.highlight}>que entregamos<span className={styles.animatedUnderline}></span></span>
        </h2>
        
        <div className={styles.contentWrapper}>
          <div className={styles.testimonialCards}>
            <div className={styles.testimonialCard} ref={addToRefs}>
              <div className={styles.testimonialContent}>
                <div className={styles.quote}>"</div>
                <p className={styles.testimonialText}>
                  A plataforma whitelabel para contratos de mineração transformou nosso negócio. Conseguimos escalar operações em 300% em apenas 6 meses, com uma interface personalizada que reflete nossa marca.
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <span>RM</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Ricardo Mendes</div>
                    <div className={styles.authorRole}>CEO, MineraMax Solutions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard} ref={addToRefs}>
              <div className={styles.testimonialContent}>
                <div className={styles.quote}>"</div>
                <p className={styles.testimonialText}>
                  O agente de IA integrado é revolucionário. Ele não só atende clientes 24/7, como também executa operações complexas e finaliza vendas de forma autônoma. Nossas conversões aumentaram em 42%.
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <span>CT</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Carla Torres</div>
                    <div className={styles.authorRole}>Diretora Comercial, TechSales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={styles.counterSection} 
            ref={counterRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`${styles.counterBox} ${isHovering ? styles.hovering : ''}`}>
              <div className={styles.counterTitle}>Usuários Ativos</div>
              <div className={styles.counterValue}>
                <span className={styles.counterNumber}>{count.toLocaleString()}</span><span className={styles.plus}>+</span>
              </div>
              <div className={styles.counterDesc}>
                Em nossas plataformas
              </div>
            </div>
            
            <div className={`${styles.counterBox} ${styles.financialCounter} ${isHovering ? styles.hovering : ''}`}>
              <div className={styles.counterTitle}>Movimentação Financeira</div>
              <div className={styles.counterValue}>
                <span className={styles.counterNumber}>{formatCurrency(financialCount)}</span><span className={styles.plus}>+</span>
              </div>
              <div className={styles.counterDesc}>
                Movimentado no whitelabel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 