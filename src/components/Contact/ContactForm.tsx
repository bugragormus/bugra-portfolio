"use client";

import { useContactController } from "@/controllers/useContactController";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { t } = useLanguage();
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
      label: t("emailAddress") || "Email Address",
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
      label: t("locationLugano") || "Lugano, Switzerland",
      value: "Lugano, Switzerland",
      href: null,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="editorial-container">
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>{t("contactTitle")}</h2>
          <p className={styles.subtitle}>
            {t("contactSubtitle")}
          </p>
        </div>

        <div className={styles.layout}>
          {/* Form Side */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>{t("sendAMessage")}</h3>
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
                  {t("fullName")}
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
                  {t("emailAddress")}
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
                  {t("messageText")}
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
                {isSubmitting ? t("sendingBtn") : t("sendBtn")}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>{t("directChannels")}</h3>
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
              <h3 className={styles.resumeTitle}>{t("cvTitle")}</h3>
              <p className={styles.resumeText}>
                {t("cvText")}
              </p>
              <a
                href="/CV_Bugra_Gormus.pdf"
                download="Bugra_Gormus_CV.pdf"
                className={styles.downloadBtn}
              >
                <Download size={14} /> {t("btnDownloadCV")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
