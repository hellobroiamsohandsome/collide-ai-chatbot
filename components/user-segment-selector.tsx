"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp } from "lucide-react";

type UserSegmentSelectorProps = {
  onSegmentSelect: (segment: "aspiring" | "emerging") => void;
};

export const UserSegmentSelector = ({ onSegmentSelect }: UserSegmentSelectorProps) => {
  return (
    <div className="w-full">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Where are you in your journey?
        </h3>
        <p className="text-sm text-muted-foreground">
          Choose your path to get tailored guidance
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <motion.button
          animate={{ opacity: 1, y: 0 }}
          className="group relative overflow-hidden rounded-xl border-2 border-border bg-card p-6 text-left transition-all hover:shadow-xl hover:scale-105 hover:border-primary"
          initial={{ opacity: 0, y: 20 }}
          onClick={() => onSegmentSelect("aspiring")}
          transition={{ delay: 0.9 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative z-10">
            <div className="mb-4 inline-block rounded-lg p-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h4 className="font-bold text-xl text-foreground mb-2">
              Aspiring Entrepreneur
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Pre-launch or ideation phase. You have a vision and need to shape it into a viable brand and business.
            </p>
            <div className="text-xs text-muted-foreground">
              Focus: Discover • Frame • Craft
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <motion.button
          animate={{ opacity: 1, y: 0 }}
          className="group relative overflow-hidden rounded-xl border-2 border-border bg-card p-6 text-left transition-all hover:shadow-xl hover:scale-105 hover:border-primary"
          initial={{ opacity: 0, y: 20 }}
          onClick={() => onSegmentSelect("emerging")}
          transition={{ delay: 1.0 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative z-10">
            <div className="mb-4 inline-block rounded-lg p-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h4 className="font-bold text-xl text-foreground mb-2">
              Emerging Entrepreneur
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Early growth or scaling phase. You're launched and ready to scale intelligently while maintaining integrity.
            </p>
            <div className="text-xs text-muted-foreground">
              Focus: Structure • Activate • Evolve
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>
    </div>
  );
};
