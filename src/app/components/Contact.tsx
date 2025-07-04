"use client";

import style from "../styles/contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function sendContactForm(data: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Échec de l'envoi du message");
    }

    return res;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendContactForm(data);
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    // Masquer le message après 4 secondes
    setTimeout(() => setStatus(null), 4000);
  }

  return (
    <div className={style.contactSection} id="contact" ref={ref}>
      <motion.h1
        className={style.contactTitle}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h1>

      <motion.h3
        className={style.subTitle}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        N'hésitez pas à me contacter.
      </motion.h3>

      <motion.div
        className={style.contactContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <div className={style.contactInfo}>
          <h2>Informations personnelles</h2>
          <div className={style.contactItem}>
            <Mail className={style.icon} />
            <div>
              <strong>Email</strong>
              <p>fares.ab74@gmail.com</p>
            </div>
          </div>
          <div className={style.contactItem}>
            <Phone className={style.icon} />
            <div>
              <strong>Téléphone</strong>
              <p>+33 6 51 49 43 31</p>
            </div>
          </div>
          <div className={style.contactItem}>
            <MapPin className={style.icon} />
            <div>
              <strong>Localisation</strong>
              <p>Annecy, France</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={style.contactForm}>
          <h2>Envoyez-moi un message</h2>
          <p>Je vous répondrai dans les plus brefs délais</p>

          <div className={style.formRow}>
            <input type="text" name="firstName" placeholder="Prénom" required />
            <input type="text" name="lastName" placeholder="Nom" required />
          </div>

          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Sujet" required />
          <textarea name="message" placeholder="Votre message..." required />
          <button type="submit">Envoyer le message</button>

          {status === "success" && (
            <div className={style.popupSuccess}>
              Votre message a bien été envoyé.
            </div>
          )}
          {status === "error" && (
            <div className={style.popupError}>
              Une erreur est survenue. Veuillez réessayer.
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
