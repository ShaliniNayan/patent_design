"use client";
import { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        name="name"
        type="text"
        required
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <textarea
        name="message"
        required
        placeholder="Your Message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
      {submitted && (
        <p className="text-green-600 mt-2">
          Message sent! We'll respond shortly.
        </p>
      )}
    </form>
  );
}
