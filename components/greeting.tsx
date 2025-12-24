import { motion } from "framer-motion";
import { useState } from "react";
import { UserSegmentSelector } from "./user-segment-selector";
import { FrameworkPhases } from "./framework-phases";

type GreetingMode = "initial" | "segment" | "framework";

export const Greeting = () => {
  const [mode, setMode] = useState<GreetingMode>("initial");
  const [selectedSegment, setSelectedSegment] = useState<"aspiring" | "emerging" | null>(null);

  const handleSegmentSelect = (segment: "aspiring" | "emerging") => {
    setSelectedSegment(segment);
    setMode("framework");
  };

  const handlePhaseClick = (phase: string) => {
    // This would trigger the chat with a specific phase context
    console.log(`Selected phase: ${phase} for ${selectedSegment} entrepreneur`);
  };

  return (
    <div
      className="mx-auto mt-4 flex size-full max-w-5xl flex-col justify-center px-4 md:mt-8 md:px-8"
      key="overview"
    >
      {/* Main Header - Always visible */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3">
          Welcome to COLLIDE
        </h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto"
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.6 }}
        >
          The Founder's Lens — Your guide through clarity, strategy, and creative integrity
        </motion.p>
      </motion.div>

      {/* Initial Mode - Brand tagline and CTA */}
      {mode === "initial" && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-lg md:text-xl text-foreground mb-6 font-medium">
            Where creative integrity meets commercial viability
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold text-base hover:shadow-xl transition-all"
            onClick={() => setMode("segment")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started — Define Your DNA
          </motion.button>
        </motion.div>
      )}

      {/* Segment Selection Mode */}
      {mode === "segment" && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
        >
          <UserSegmentSelector onSegmentSelect={handleSegmentSelect} />
        </motion.div>
      )}

      {/* Framework Phases Mode */}
      {mode === "framework" && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            animate={{ opacity: 1 }}
            className="text-center mb-6"
            initial={{ opacity: 0 }}
          >
            <p className="text-sm text-muted-foreground">
              You selected: <span className="font-semibold text-foreground capitalize">{selectedSegment} Entrepreneur</span>
            </p>
          </motion.div>
          <FrameworkPhases onPhaseClick={handlePhaseClick} />
        </motion.div>
      )}
    </div>
  );
};
