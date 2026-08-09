"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({
  chart,
}: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        background: "#0d1117",
        primaryColor: "#3b6ea5",
        primaryBorderColor: "#5b8ac5",
        primaryTextColor: "#c9d1d9",
        lineColor: "#3b6ea5",
        cScale0: "#1e3a5f",
        cScale1: "#2c5282",
        cScale2: "#3b6ea5",
        cScale3: "#4a7fc0",
        cScale4: "#5b8ac5",
        cScale5: "#6d9ad4",
        cScale6: "#7ba3d0",
        cScale7: "#2f5d80",
        cScale8: "#264d75",
        cScale9: "#3d6f99",
        cScale10: "#4d7fab",
        cScale11: "#5e8fbb",
        cScaleLabel0: "#e2e8f0",
        cScaleLabel1: "#e2e8f0",
        cScaleLabel2: "#e2e8f0",
        cScaleLabel3: "#e2e8f0",
        cScaleLabel4: "#e2e8f0",
        cScaleLabel5: "#e2e8f0",
        cScaleLabel6: "#e2e8f0",
        cScaleLabel7: "#e2e8f0",
        cScaleLabel8: "#e2e8f0",
        cScaleLabel9: "#e2e8f0",
        cScaleLabel10: "#e2e8f0",
        cScaleLabel11: "#e2e8f0",
      },
    });

    if (ref.current) {
      mermaid
        .render(
          `mermaid-${Date.now()}`,
          chart
        )
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        });
    }
  }, [chart]);

return (
    <>
      <style jsx global>{`
        .mindmap-node:hover .node-bkg,
        .mindmap-node:hover circle {
          fill: #ffffff !important;
          transition: fill 0.15s ease;
        }
        .mindmap-node:hover .nodeLabel,
        .mindmap-node:hover .nodeLabel p {
          color: #000000 !important;
        }
      `}</style>
      <div ref={ref} />
    </>
  );
}
