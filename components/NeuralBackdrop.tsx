"use client";

import { motion } from "framer-motion";

/**
 * Animated "neural blueprint" — structural nodes connected by a mesh, with
 * data pulses traveling the edges. Visualizes the architecture / data-flow
 * thesis. Deterministic coordinates (no RNG) so SSR and resume stay stable.
 */

const NODES: [number, number][] = [
  [90, 140],
  [240, 90],
  [360, 250],
  [180, 420],
  [120, 640],
  [330, 560],
  [500, 160],
  [560, 400],
  [460, 690],
  [700, 250],
  [680, 540],
  [840, 360],
  [980, 200],
  [1010, 560],
  [1120, 390],
  [1150, 120],
  [880, 670],
  [760, 90],
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [2, 6],
  [5, 8],
  [6, 7],
  [7, 10],
  [6, 9],
  [9, 11],
  [7, 11],
  [9, 17],
  [11, 12],
  [12, 15],
  [11, 13],
  [13, 14],
  [14, 15],
  [10, 16],
  [13, 16],
  [12, 14],
  [1, 17],
  [5, 7],
  [8, 10],
];

// Edges that carry a traveling pulse
const PULSE_EDGES = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

// Slightly emphasized "hub" nodes
const HUBS = new Set([2, 7, 11, 13]);

export default function NeuralBackdrop() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Edges */}
      <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
          />
        ))}
      </g>

      {/* Nodes (subtle breathing) */}
      <g>
        {NODES.map(([x, y], i) => {
          const hub = HUBS.has(i);
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={hub ? 3 : 1.8}
              fill={hub ? "#00E5FF" : "#ffffff"}
              initial={{ opacity: hub ? 0.5 : 0.18 }}
              animate={{
                opacity: hub ? [0.5, 0.95, 0.5] : [0.18, 0.4, 0.18],
              }}
              transition={{
                duration: 3 + (i % 5) * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 7) * 0.4,
              }}
            />
          );
        })}
      </g>

      {/* Traveling data pulses */}
      <g>
        {PULSE_EDGES.map((edgeIdx, k) => {
          const [a, b] = EDGES[edgeIdx];
          const [x1, y1] = NODES[a];
          const [x2, y2] = NODES[b];
          const dur = 2.4 + (k % 4) * 0.7;
          return (
            <motion.circle
              key={k}
              r={3.2}
              fill="url(#pulseGrad)"
              initial={{ cx: x1, cy: y1, opacity: 0 }}
              animate={{
                cx: [x1, x2],
                cy: [y1, y2],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: dur,
                repeat: Infinity,
                ease: "linear",
                delay: k * 0.5,
                times: [0, 0.15, 0.85, 1],
              }}
            />
          );
        })}
      </g>
    </svg>
  );
}
