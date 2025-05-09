import React, { useState, useEffect, useRef } from 'react';
import styles from './UserCounter.module.css';

export default function UserCounter() {
  const [userCount, setUserCount] = useState(0);
  const [financialCount, setFinancialCount] = useState(0);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);
  const counterRef = useRef(null);
  const financialCounterRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !animated) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          counterRef.current.classList.add(styles.visible);
          if (financialCounterRef.current) {
            financialCounterRef.current.classList.add(styles.visible);
          }
          startCounting();
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated]);
  
  const startCounting = () => {
    // Contador de usuários
    let userStartValue = 0;
    const userEndValue = 5000;
    const userDuration = 2500; // ms
    const userIncrement = 50;
    const userSteps = Math.ceil(userEndValue / userIncrement);
    const userStepTime = userDuration / userSteps;
    
    const userTimer = setInterval(() => {
      userStartValue += userIncrement;
      setUserCount(prev => {
        const nextValue = prev + userIncrement;
        if (nextValue >= userEndValue) {
          clearInterval(userTimer);
          return userEndValue;
        }
        return nextValue;
      });
      
      if (userStartValue >= userEndValue) {
        clearInterval(userTimer);
      }
    }, userStepTime);
    
    // Contador financeiro
    let financialStartValue = 0;
    const financialEndValue = 12000000; // 12 milhões
    const financialDuration = 3000; // ms
    const financialIncrement = 400000; // incremento maior para chegar até 12 milhões
    const financialSteps = Math.ceil(financialEndValue / financialIncrement);
    const financialStepTime = financialDuration / financialSteps;
    
    const financialTimer = setInterval(() => {
      financialStartValue += financialIncrement;
      setFinancialCount(prev => {
        const nextValue = prev + financialIncrement;
        if (nextValue >= financialEndValue) {
          clearInterval(financialTimer);
          return financialEndValue;
        }
        return nextValue;
      });
      
      if (financialStartValue >= financialEndValue) {
        clearInterval(financialTimer);
      }
    }, financialStepTime);
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

  return (
    <section className={styles.counterSection} ref={sectionRef}>
      <div className={styles.counterContainer}>
        <div className={styles.counterBox} ref={counterRef}>
          <h2 className={styles.counterTitle}>Impactamos usuários reais</h2>
          <div className={styles.counterValue}>
            <span className={styles.number}>{userCount.toLocaleString('pt-BR')}</span>
            <span className={styles.plus}>+</span>
          </div>
          <p className={styles.counterText}>usuários ativos em nossos sistemas</p>
        </div>
        
        <div className={`${styles.counterBox} ${styles.financialBox}`} ref={financialCounterRef}>
          <h2 className={styles.counterTitle}>Movimentação Financeira</h2>
          <div className={styles.counterValue}>
            <span className={styles.number}>{formatCurrency(financialCount)}</span>
            <span className={styles.plus}>+</span>
          </div>
          <p className={styles.counterText}>movimentados em nosso whitelabel financeiro</p>
        </div>
      </div>
    </section>
  );
} 