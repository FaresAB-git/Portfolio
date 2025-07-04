'use client'
import style from "../styles/skills.module.css"
import { Github } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { Database } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export default function Skills(){
    const frontSkills = ["React",  "Next.js","HTML","CSS","Javascript","Typescript",]
    const backSkills = ["Nest.js", "Express", "Flask","SQL","MongoDB","Prisma"]
    const toolSkills = ["Git", "Docker", "VScode", "Postman"]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })



    return(

        <div className={style.skillsContainer} id="skills">
            <motion.h1 
                className={style.skillsTitle}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            > 
                Mes compétences 
            </motion.h1>
            <motion.h3 
                className={style.subTitle}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
            > 
                Technologies et outils que j'utilise pour créer des applications web 
            </motion.h3>

            <div className={style.cardContainer}>
                <motion.div 
                    className={style.card}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className={style.iconContainer}> <a><Database size={45}/></a> </div>
                    <h3 className={style.cardTitle}>Frontend</h3>
                    <div className={style.badgeContainer}> 
                        {frontSkills.map((skill, index) => (
                            <span key={index} className={style.badge}>{skill}</span>
                        ))}
                    </div>
                </motion.div>
                <motion.div 
                    className={style.card}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className={style.iconContainer}> <a><CodeXml size={45}/></a> </div>
                    <h3 className={style.cardTitle}>Backend</h3>
                    <div className={style.badgeContainer}> 
                        {backSkills.map((skill, index) => (
                            <span key={index} className={style.badge}>{skill}</span>
                        ))}
                    </div>
                </motion.div>
                <motion.div 
                    className={style.card}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className={style.iconContainer}> <a><Wrench size={45}/></a> </div>
                    <h3 className={style.cardTitle}>Tools</h3>
                    <div className={style.badgeContainer}> 
                        {toolSkills.map((skill, index) => (
                            <span key={index} className={style.badge}>{skill}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}