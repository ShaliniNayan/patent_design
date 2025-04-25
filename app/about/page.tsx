"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white text-gray-900 py-16 px-6 dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio
        perferendis asperiores porro numquam modi quasi corporis! Excepturi
        totam libero iste. Error voluptate eaque culpa, omnis vitae eos nam
        neque!
      </p>
    </motion.section>
  );
}
