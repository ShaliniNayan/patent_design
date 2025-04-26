"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-50 py-16 px-6 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
      <p className="mb-6">
        Send us your queries. We’ll get back to you shortly.
      </p>
      <form className="grid gap-4 max-w-xl">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded dark:bg-gray-800"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded dark:bg-gray-800"
        />
        <textarea
          placeholder="Your message"
          className="border p-2 rounded dark:bg-gray-800"
        ></textarea>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          Send
        </button>
      </form>
    </motion.section>
  );
}
