'use client'
import style from "../styles/projects.module.css"
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

 const projects = [
  {
    title: "Ce portfolio",
    description: "Un portfolio simple avec plusieurs sections et quelques animations",
    image: "./projetTest.png",
    technologies: ["React", "Next.js", "CSS"],
    codeLink: "https://github.com/mon-projet",
    demoLink: "https://demo.mon-projet.com",
    video: "./portfolio.mp4",
    isDeployed: false,
  },
  {
    title: "Template app e-commerce",
    description: "Un template d'application e-commerce avec un panneau admin pour gérer les produits, les collections, le stock, un dashboard, etc.",
    image: "./ProjetAppEcom.png",
    technologies: ["Nest.js", "PostgreSQL", "Next.js", "TypeScript"],
    codeLink: "https://github.com/FaresAB-git/siteEcom",
    demoLink: "https://app.siteecomfares.fr",
    video: "./videoProjet2.mp4",
    isDeployed: true,
  },
  {
    title: "Tableau Kanban",
    description: "Une application simple pour créer un tableau Kanban avec authentification, projets personnalisés et attribution de tâches aux membres.",
    image: "./ProjetVue.png",
    technologies: ["Vue.js", "Express", "MongoDB"],
    codeLink: "https://github.com/FaresAB-git/app-fullstack",
    demoLink: "https://demo.deuxieme-projet.com",
    video: "./videoProjet3.mp4",
    isDeployed: false,
  }
]

  return (
    <div className={style.projectsContainer} id="projects" ref={ref}>
      <motion.h1
        className={style.projectsTitle}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Mon portfolio
      </motion.h1>

      <motion.h3
        className={style.subTitle}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Découvrez quelques-uns de mes projets récents, réalisés en cours ou à la maison, dans le but d’apprendre le développement web.
      </motion.h3>

      <div className={style.projectsCardContainer}>
        {projects.map((project, index) => (
          <motion.div
            className={style.card}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
          >
            <div className={style.projetImgContainer}>
              <img className={style.projectImg} src={project.image} alt={project.title} />
              <video
                className={style.projectVideo}
                src={project.video}
                muted
                loop
                playsInline
                autoPlay
              />
            </div>

            <div className={style.textContainer}>
              <h3 className={style.projectTitle}>{project.title}</h3>
              <p className={style.projectText}>{project.description}</p>
            </div>

            <div className={style.badgeContainer}>
              {project.technologies.map((tech, i) => (
                <span className={style.badge} key={i}>{tech}</span>
              ))}
            </div>

            <div className={style.btnContainer}>
              <a className={style.btn} href={project.codeLink} target="_blank" rel="noopener noreferrer">
                Code <Github size={20} />
              </a>
              {project.isDeployed ? (
                <a className={style.btn} href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Demo <ExternalLink size={20} />
                </a>
              ) : (
                <button className={`${style.btn} ${style.disabled}`} disabled>
                  Demo <ExternalLink size={20} />
                </button>
              )}

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
