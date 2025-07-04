'use client';

import { useEffect, useState } from 'react';
import style from '../styles/header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${style.Headercontainer} ${scrolled ? style.scrolled : ''}`}>
      <div className={style.logo}>
        <a href="#">Prorfolio</a>
      </div>

      <nav className={style.nav}>
        <a href="#" className={style.navElement}>Accueil</a>
        <a href="#about" className={style.navElement}>À propos</a>
        <a href="#skills" className={style.navElement}>Compétences</a>
        <a href="#projects" className={style.navElement}>Projets</a>
        <a href="#contact" className={style.navElement}>Contact</a>
      </nav>

      <button className={style.menuButton} onClick={() => setMenuOpen(true)}>
        <Menu />
      </button>
      
      <div className={`${style.mobileMenu} ${menuOpen ? style.open : ''}`}>
        <button className={style.closeButton} onClick={() => setMenuOpen(false)}>
          <X />
        </button>
        <a href="#" onClick={() => setMenuOpen(false)}>Accueil</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>À propos</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </header>
  );
}
