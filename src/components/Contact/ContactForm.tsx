"use client";

import { useContactController } from "@/controllers/useContactController";
import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useContactController();

  const contactDetails = [
    {
      icon: Mail,
      label: "Email Address",
      value: "bugra.gormus@hotmail.com",
      href: "mailto:bugra.gormus@hotmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bugragormus",
      href: "https://linkedin.com/in/bugragormus",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "github.com/bugragormus",
      href: "https://github.com/bugragormus",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lugano, Switzerland",
      href: null,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="editorial-container">
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>
            Let&apos;s discuss machine learning research, data collaborations, or software architectures.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Form Side */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              {submitStatus.type && (
                <div
                  className={`${styles.statusMessage} ${
                    submitStatus.type === "success"
                      ? styles.statusSuccess
                      : styles.statusError
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message Text
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`${styles.input} ${styles.textarea}`}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? "Transmitting..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Detail Matrix</h3>
              <div className={styles.contactList}>
                {contactDetails.map((detail, index) => {
                  const DetailIcon = detail.icon;
                  const itemContent = (
                    <>
                      <div className={styles.iconWrapper}>
                        <DetailIcon size={16} />
                      </div>
                      <div className={styles.contactMeta}>
                        <span className={styles.contactLabel}>{detail.label}</span>
                        <span className={styles.contactValue}>{detail.value}</span>
                      </div>
                    </>
                  );

                  if (detail.href) {
                    return (
                      <a
                        key={index}
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactItem}
                      >
                        {itemContent}
                      </a>
                    );
                  }

                  return (
                    <div key={index} className={styles.contactItem}>
                      {itemContent}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.resumeBox}>
              <h3 className={styles.resumeTitle}>Curriculum Vitae</h3>
              <p className={styles.resumeText}>
                Review a comprehensive record of academic background, machine learning publications,
                and software systems experience.
              </p>
              <a
                href="/CV_Bugra_Gormus.pdf"
                download="Bugra_Gormus_CV.pdf"
                className={styles.downloadBtn}
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
