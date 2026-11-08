"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import TitleSec from "../ui/title-sec";
import { HiEnvelope } from "react-icons/hi2";
import { RiLinkedinFill } from "react-icons/ri";
import { HiArrowUpRight, HiCheckCircle, HiExclamationCircle } from "react-icons/hi2";
import { submitContactForm } from "@/actions/nodemailer.action";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("idle");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const dataPayload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      mes: formData.get("mes") as string,
    };

    try {
      const res = await submitContactForm({ data: dataPayload });

      if (res?.success) {
        setStatus("success");
        formElement.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const inputClasses = `
    w-full rounded-xl border border-main/15
    bg-primary-bg/60 px-4 py-3.5
    text-sm text-text placeholder:text-text/35
    outline-none transition-all duration-300
    hover:border-main/35
    focus:border-main focus:ring-2 focus:ring-main/10
  `;

  const labelClasses = `
    text-sm font-medium text-text
  `;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="w-full bg-secondary-bg px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <TitleSec partOne="Contact" partTwo="Me!" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid w-full grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-5 lg:gap-8"
        >
          {/* Contact Information */}
          <motion.div
            variants={fadeUp}
            className="
              relative flex flex-col justify-between gap-10
              overflow-hidden rounded-3xl
              border border-main/15
              bg-primary-bg/50
              p-6 sm:p-8
              lg:col-span-2
            "
          >
            {/* Decorative Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-24 -top-24
                h-64 w-64 rounded-full
                bg-main/10 blur-[90px]
              "
            />

            <div className="relative z-10">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-main/20 bg-main/5 px-3 py-1.5 text-xs font-medium text-main">
                <span className="h-1.5 w-1.5 rounded-full bg-main" />
                Get In Touch
              </span>

              <h3 className="mb-4 text-2xl font-bold leading-snug text-text sm:text-3xl">
                Let's talk about your
                <span className="text-main"> next project.</span>
              </h3>

              <p className="max-w-md text-sm leading-7 text-text">
                Have an idea, a project, or just want to connect? I'm always
                open to discussing new opportunities and interesting ideas.
              </p>

              {/* Contact Methods */}
              <div className="mt-10 space-y-5">
                {/* Email */}
                <a
                  href="mailto:webwizardbus@gmail.com"
                  className="
                    group flex items-center gap-4 rounded-2xl
                    border border-main/10 bg-secondary-bg/50 p-4
                    transition-all duration-300
                    hover:border-main/40 hover:bg-main/5
                  "
                >
                  <div className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-xl bg-main/10 text-xl text-main
                    transition-transform duration-300
                    group-hover:scale-110
                  ">
                    <HiEnvelope />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="mb-1 block text-xs text-text/60">
                      Email Address
                    </span>
                    <span className="block break-all text-sm font-semibold text-text transition-colors group-hover:text-main">
                      webwizardbus@gmail.com
                    </span>
                  </div>

                  <HiArrowUpRight className="shrink-0 text-lg text-text/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-main" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/web-wizard-89758a3a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-4 rounded-2xl
                    border border-main/10 bg-secondary-bg/50 p-4
                    transition-all duration-300
                    hover:border-main/40 hover:bg-main/5
                  "
                >
                  <div className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-xl bg-main/10 text-xl text-main
                    transition-transform duration-300
                    group-hover:scale-110
                  ">
                    <RiLinkedinFill />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="mb-1 block text-xs text-text/60">
                      LinkedIn Profile
                    </span>
                    <span className="block text-sm font-semibold text-text transition-colors group-hover:text-main">
                      Connect with me
                    </span>
                  </div>

                  <HiArrowUpRight className="shrink-0 text-lg text-text/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-main" />
                </a>
              </div>
            </div>

            {/* Availability Footer */}
            <div className="relative z-10 border-t border-main/15 pt-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                <span className="text-xs font-semibold text-text">
                  Available for opportunities
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-text">
                Based in Syria & Available for remote work worldwide.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-6 rounded-3xl
              border border-main/15
              bg-primary-bg/50
              p-6 sm:p-8
              lg:col-span-3
            "
          >
            <div>
              <h3 className="text-xl font-bold text-text sm:text-2xl">
                Send Me a Message
              </h3>
              <p className="mt-2 text-sm text-text">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={labelClasses}>
                  Full Name <span className="text-main">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={labelClasses}>
                  Email Address <span className="text-main">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="john@example.com"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-phone" className={labelClasses}>
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  maxLength={30}
                  autoComplete="tel"
                  placeholder="+963 ..."
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className={labelClasses}>
                  Subject <span className="text-main">*</span>
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={150}
                  placeholder="Project Inquiry"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className={labelClasses}>
                Your Message <span className="text-main">*</span>
              </label>

              <textarea
                id="contact-message"
                name="mes"
                rows={6}
                required
                maxLength={5000}
                placeholder="Tell me about your project..."
                className={`${inputClasses} min-h-40 resize-y leading-7`}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-1 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-text">
                Fields marked with <span className="text-main">*</span> are required.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-xl bg-main px-7 py-3.5
                  text-sm font-bold text-primary-bg
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,171,240,0.2)]
                  active:translate-y-0
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-main focus-visible:ring-offset-2
                  focus-visible:ring-offset-primary-bg
                  disabled:cursor-not-allowed disabled:opacity-50
                "
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-bg/30 border-t-primary-bg" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <HiArrowUpRight className="text-lg" />
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            <div aria-live="polite" aria-atomic="true">
              {status === "success" && (
                <div className="flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-400/5 p-4">
                  <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-green-400" />
                  <div>
                    <p className="text-sm font-semibold text-green-400">
                      Message sent successfully!
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-text">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                  <HiExclamationCircle className="mt-0.5 shrink-0 text-xl text-red-400" />
                  <div>
                    <p className="text-sm font-semibold text-red-400">
                      Something went wrong.
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-text">
                      Your message couldn't be sent. Please try again later.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}