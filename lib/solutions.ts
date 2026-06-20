import {
  ScanFace,
  Car,
  Radar,
  Shield,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  icon: any;
  desc: string;
  tags: string[];
  features: string[];
  pipeline: string[];
  layers: string[];
};

export const solutions: Solution[] = [
  {
    slug: "facial-recognition",
    icon: ScanFace,
    title: "Facial Recognition System",
    desc: "Enterprise biometric intelligence engine for real-time identity verification across distributed surveillance networks.",
    tags: ["REAL-TIME AI PIPELINE", "EDGE COMPUTING", "BIOMETRIC ENGINE"],
    pipeline: ["CAPTURE", "PROCESS", "ANALYZE", "RESPOND"],
    layers: [
      "Edge AI Inference Nodes",
      "Deep Face Matching Network",
      "Continuous Learning System",
    ],
    features: [
      "High-accuracy face matching engine",
      "Real-time watchlist detection",
      "Cross-camera identity tracking",
      "Edge AI inference optimization",
    ],
  },

  {
    slug: "vehicle-intelligence",
    icon: Car,
    title: "Vehicle Intelligence System",
    desc: "AI-powered ANPR system for vehicle tracking, traffic intelligence and movement analytics.",
    tags: ["ANPR ENGINE", "TRAFFIC AI", "MOBILITY INTELLIGENCE"],
    pipeline: ["CAPTURE", "READ", "TRACK", "ANALYZE"],
    layers: [
      "ANPR Recognition Engine",
      "Traffic Pattern AI",
      "Route Intelligence System",
    ],
    features: [
      "Number plate recognition engine",
      "Real-time vehicle tracking",
      "Traffic heatmap analytics",
      "Violation detection system",
    ],
  },

  {
    slug: "border-intelligence",
    icon: Radar,
    title: "Border Intelligence System",
    desc: "Advanced perimeter monitoring system designed for high-security zones and border surveillance.",
    tags: ["PERIMETER AI", "DEFENSE GRID", "SURVEILLANCE CORE"],
    pipeline: ["SCAN", "DETECT", "ALERT", "RESPOND"],
    layers: [
      "Perimeter Sensor Network",
      "Threat Detection AI",
      "Border Control System",
    ],
    features: [
      "Multi-zone perimeter detection",
      "Drone + sensor fusion system",
      "Automated threat alerts",
      "Satellite-ready monitoring",
    ],
  },

  {
    slug: "cargo-security",
    icon: Shield,
    title: "Cargo Security System",
    desc: "Intelligent cargo inspection and logistics screening for critical infrastructure.",
    tags: ["LOGISTICS AI", "INSPECTION ENGINE", "RISK SCORING"],
    pipeline: ["SCAN", "CHECK", "SCORE", "DECIDE"],
    layers: [
      "X-ray AI Inspection Engine",
      "Risk Scoring Model",
      "Cargo Validation System",
    ],
    features: [
      "Cargo anomaly detection",
      "AI-based inspection system",
      "Risk scoring engine",
      "Fraud detection module",
    ],
  },

  {
    slug: "smart-surveillance",
    icon: Eye,
    title: "Smart Surveillance System",
    desc: "AI-powered monitoring system for behavior detection and anomaly intelligence.",
    tags: ["VIDEO AI", "BEHAVIOR ENGINE", "LIVE ANALYTICS"],
    pipeline: ["WATCH", "UNDERSTAND", "DETECT", "ALERT"],
    layers: [
      "Behavior Analysis AI",
      "Video Stream Engine",
      "Event Detection System",
    ],
    features: [
      "Crowd behavior detection",
      "Suspicious activity alerts",
      "Live video analytics",
      "Multi-camera sync system",
    ],
  },

  {
    slug: "command-center",
    icon: MonitorSmartphone,
    title: "Command Center System",
    desc: "Unified intelligence dashboard for monitoring, control and response orchestration.",
    tags: ["OPS CENTER", "CONTROL HUB", "REAL-TIME DASHBOARD"],
    pipeline: ["MONITOR", "DECIDE", "CONTROL", "RESPOND"],
    layers: [
      "Unified Control Dashboard",
      "Incident Response Engine",
      "Multi-site Monitoring System",
    ],
    features: [
      "Unified operations dashboard",
      "Real-time command system",
      "Multi-location monitoring",
      "Automated incident response",
    ],
  },
];