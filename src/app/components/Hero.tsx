'use client'
import style from '../styles/hero.module.css'
import Header from './Header'
import { motion } from "framer-motion"


export default function Hero() {
    return (
        <>
            <Header />
            <div className={style.container}> 
                <div className={style.heroContainer}>
                    <motion.h3
                        className={style.nom}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Fares Abdelghani
                    </motion.h3>

                    <motion.h1
                        className={style.devTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Développeur web en devenir
                    </motion.h1>

                    <motion.p
                        className={style.subText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        À la recherche d'une alternance en développement web - motivé, curieux et prêt à apprendre.
                    </motion.p>
                    <motion.div 
                        className={style.btnContainer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <a className={style.btn} href='#about'> En savoir plus </a>
                    </motion.div >
                </div>
            </div>
        </>
    )
}
