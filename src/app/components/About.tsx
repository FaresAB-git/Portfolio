'use client'

import style from '../styles/about.module.css'
import Header from './Header'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';




export default function About() {
  const aboutText = "Je suis actuellement à la recherche d'une alternance en développement web dans le cadre de mon Master 2 en Systèmes d'Information et Innovation du Numérique. J'ai découvert le développement web pendant mes études ; ce domaine m’a très vite passionné. Par la suite, j'ai eu l’occasion de créer plusieurs applications web, que ce soit dans un cadre professionnel ou personnel. Cela m’a permis d’améliorer mes compétences techniques, surtout en JavaScript, React et Node.js."

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div className={style.aboutContainer} id="about">
        <motion.h2
          className={style.aboutTitle}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          À propos de moi
        </motion.h2>

        <motion.div
          className={style.aboutContentContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={style.btnTextContainer}>
            <p className={style.about}>{aboutText}</p>
            <div className={style.btnContainer}>
              <a href='https://github.com/FaresAB-git' target="_blank"><Github size={45} /></a>
              <a href='https://www.linkedin.com/in/fares-abdelghani-417110228/' target="_blank"><Linkedin size={45}/></a>
              <a className={style.btnDownload} download target="_blank" href='./cv.pdf'>téléchargé mon CV</a>
            </div>
            
          </div>

          <div className={style.cvContainer}>
            <img src="./Capture.PNG" className={style.cv} />
          </div>
        </motion.div>
      </div>
    </>
  )
}
