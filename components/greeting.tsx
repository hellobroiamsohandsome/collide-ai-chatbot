import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <div
      className="mx-auto mt-4 flex size-full max-w-3xl flex-col justify-center px-4 md:mt-16 md:px-8"
      key="overview"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="font-semibold text-2xl md:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
      >
        Welcome to COLLIDE
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-lg text-muted-foreground md:text-xl mt-2"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
      >
        The Founder's Lens — Your guide through clarity, strategy, and creative integrity.
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-base text-muted-foreground md:text-lg mt-4"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.7 }}
      >
        Let's define your Brand & Business DNA and transform your vision into commercial reality.
      </motion.div>
    </div>
  );
};
