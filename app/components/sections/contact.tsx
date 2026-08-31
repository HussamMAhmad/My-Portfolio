"use client";

import React, { useState } from "react";
import TitleSec from "../ui/title-sec";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      // هنا يتم ربط الـ API الخاّص بك لإرسال البريد (مثلاً عبر Nodemailer أو Resend)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full section flex items-center flex-col justify-center bg-secondary-bg">
      <TitleSec partOne="Contact" partTwo="Me!" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
        {/* الجانب الأيسر: معلومات التواصل المباشرة */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-primary-bg/40 border-solid border border-main/20 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-text mb-3">Let's talk about your project</h3>
            <p className="text-text/70 text-sm leading-relaxed mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-main/10 flex items-center justify-center text-main text-xl">
                  <i className="bx bx-envelope" />
                </div>
                <div>
                  <span className="text-xs text-text/50 block font-mono">Mail Me</span>
                  <a href="mailto:your.email@example.com" className="text-sm font-semibold text-text hover:text-main transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-main/10 flex items-center justify-center text-main text-xl">
                  <i className="bx bxl-linkedin" />
                </div>
                <div>
                  <span className="text-xs text-text/50 block font-mono">LinkedIn</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-text hover:text-main transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-solid border-t border-main/10">
            <span className="text-xs text-text/60">Based in Syria & Available for remote work worldwide.</span>
          </div>
        </div>

        {/* الجانب الأيمن: نموذج التواصل */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 p-8 rounded-3xl bg-primary-bg/40 border border-solid border-main/20 flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-text/80">Full Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-primary-bg/50 border border-solid border-main/20 focus:border-main focus:outline-none text-text text-sm transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-text/80">Email Address</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-primary-bg/50 border border-solid border-main/20 focus:border-main focus:outline-none text-text text-sm transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-text/80">Phone Number</label>
              <input
                type="tel"
                placeholder="+963 ..."
                className="w-full px-4 py-3 rounded-xl bg-primary-bg/50 border border-solid border-main/20 focus:border-main focus:outline-none text-text text-sm transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-text/80">Subject</label>
              <input
                type="text"
                required
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-primary-bg/50 border border-solid border-main/20 focus:border-main focus:outline-none text-text text-sm transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-text/80">Message</label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-primary-bg/50 border border-solid border-main/20 focus:border-main focus:outline-none text-text text-sm transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-main text-primary-bg font-semibold text-sm hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 self-end"
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-xs text-green-400 font-medium text-center mt-2">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-red-400 font-medium text-center mt-2">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}