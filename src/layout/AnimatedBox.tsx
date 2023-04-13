import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  children: ReactNode;
}

const AnimatedBox = ({ children }: IProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ marginTop: 240 }}
        whileInView={{ marginTop: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        exit={{ marginTop: 0 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedBox;
