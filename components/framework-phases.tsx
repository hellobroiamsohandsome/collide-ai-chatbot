"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Palette, Building, Rocket, TrendingUp } from "lucide-react";

export const frameworkPhases = [
  {
    id: "discover",
    title: "Discover",
    description: "Unearth vision, values & positioning",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "frame",
    title: "Frame",
    description: "Define strategic narrative & market position",
    icon: Target,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "craft",
    title: "Craft",
    description: "Build brand identity & creative expression",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "structure",
    title: "Structure",
    description: "Establish business architecture & operations",
    icon: Building,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "activate",
    title: "Activate",
    description: "Launch strategies & go-to-market execution",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "evolve",
    title: "Evolve",
    description: "Continuous refinement & adaptive growth",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-500",
  },
];

type FrameworkPhasesProps = {
  onPhaseClick: (phase: string) => void;
};

export const FrameworkPhases = ({ onPhaseClick }: FrameworkPhasesProps) => {
  return (
    <div className="w-full">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-2">
          The COLLIDE Framework™
        </h3>
        <p className="text-sm text-muted-foreground">
          Six phases to transform vision into reality
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {frameworkPhases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <motion.button
              key={phase.id}
              animate={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 text-left transition-all hover:shadow-lg hover:scale-105 hover:border-primary/50"
              initial={{ opacity: 0, y: 20 }}
              onClick={() => onPhaseClick(phase.id)}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div className={`rounded-md p-2 bg-gradient-to-br ${phase.color} text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base text-foreground mb-1">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
