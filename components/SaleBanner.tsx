"use client";

import { motion } from "framer-motion";

export default function SaleBanner() {
  return (
    <div className="overflow-hidden bg-[#1e3a8a] border-b border-blue-900/40 py-2.5">
      <motion.div
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex justify-center whitespace-nowrap text-sm font-semibold tracking-[0.2em] text-white sm:text-base"
      >
        <span>
          SALE <span className="text-[#fde68a]">!</span> UP TO 40% OFF
        </span>
      </motion.div>
    </div>
  );
}
