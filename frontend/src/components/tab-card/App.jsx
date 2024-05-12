import "./styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App(props) {
  const [selectedTab, setSelectedTab] = useState(props.tabs[0]);

  return (
    <div className="window tab-bar">
      
      <nav>
        <ul>
          {props.tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.image : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
