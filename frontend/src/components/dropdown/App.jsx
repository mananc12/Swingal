import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Drop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="menu-drop">
      <motion.button type="button"  className="drop-button" whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
        Other Services
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
      className="container-ul"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li className="container-li" variants={itemVariants}>Home Delivery </motion.li>
        <motion.li className="container-li" variants={itemVariants}>Cake order </motion.li>
        <motion.li className="container-li" variants={itemVariants}>Room Renting </motion.li>
        <motion.li className="container-li" variants={itemVariants}>Buy/Sell House </motion.li>
        <motion.li className="container-li" variants={itemVariants}>Money Dealing </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
