import React, { useState } from 'react';
import styles from './Contato.module.css';

export default function Contato() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Olá, sou o ${name}, vim pelo site da KR, ${message}`;
    const whatsappUrl = `https://wa.me/${process.env.REACT_APP_CONTACT}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.contact} id="contato">
      <h2>Fale com a KR</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input className='inputText' value={name} onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Seu nome" required />
        <input style={{ height: 100 }} className='big-text inputText' value={message} onChange={e => setMessage(e.target.value)} type="text" name="message" placeholder="Sua mensagem" required />
        <button type="submit" className={styles.button}>Enviar no WhatsApp</button>
      </form>
    </section>
  );
} 