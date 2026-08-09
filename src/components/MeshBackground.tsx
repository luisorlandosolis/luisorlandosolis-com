export default function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1600 900"
        className="topology-svg w-full h-full opacity-50"
      >
        <g stroke="#6b7280" strokeWidth="1.5" fill="none">
          <line x1="250" y1="200" x2="500" y2="150" />
          <line x1="500" y1="150" x2="850" y2="250" />
          <line x1="850" y1="250" x2="1200" y2="180" />

          <line x1="250" y1="200" x2="400" y2="500" />
          <line x1="500" y1="150" x2="700" y2="450" />
          <line x1="850" y1="250" x2="1000" y2="500" />

          <line x1="400" y1="500" x2="700" y2="450" />
          <line x1="700" y1="450" x2="1000" y2="500" />

          <circle
            cx="250"
            cy="200"
            r="4"
            fill="#58a6ff"
            className="mesh-node"
            style={{ animationDelay: "0s" }}
          />

          <circle
            cx="500"
            cy="150"
            r="4"
            fill="#58a6ff"
            className="mesh-node"
            style={{ animationDelay: "1.3s" }}
          />

          <circle
            cx="850"
            cy="250"
            r="4"
            fill="#58a6ff"
            className="mesh-node"
            style={{ animationDelay: "2.7s" }}
          />

          <circle
            cx="1200"
            cy="180"
            r="4"
            fill="#58a6ff"
            className="mesh-node"
            style={{ animationDelay: "4.8s" }}
          />

          <circle
            cx="400"
            cy="500"
            r="4"
            fill="#58a6ff"
            className="mesh-node"
            style={{ animationDelay: "0.8s" }}
          />

          <circle
            cx="700"
            cy="450"
            r="4"
            fill="#58a6ff"
            className="mesh-node"
            style={{ animationDelay: "3.2s" }}
          />

          <circle
            cx="1000"
            cy="500"
            r="4"
            fill="#58a6ff"
            className="mesh-node"
            style={{ animationDelay: "5.1s" }}
          />
        </g>
      </svg>
    </div>
  );
}
