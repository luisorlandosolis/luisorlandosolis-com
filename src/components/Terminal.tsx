"use client";

import { useEffect, useRef, useState } from "react";

export default function Terminal() {
  const [history, setHistory] = useState([
    "══════════════════════════════",
    "O/S TERMINAL",
    "══════════════════════════════",
    "",
    "Type 'help' to view available commands",
    "",
  ]);

  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function execute(command: string) {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    let output: string[] = [];

    switch (cmd) {
      case "help":
        output = [
          "══════════════════════════════",
          "AVAILABLE COMMANDS",
          "══════════════════════════════",
          "",
          "whoami     - profile summary",
          "skills     - technology ecosystem",
          "current    - current focus",
          "journey    - professional journey",
          "platforms  - all platforms",
          "platform   - platform overview",
          "platform 07",
          "platform 08",
          "platform 09",
          "resume     - portfolio profile",
          "contact    - contact information",
          "clear      - clear terminal",
          "",
          "· enter a command and press Enter",
        ];
        break;

case "platform":
  output = [
    "Usage:",
    "",
    "platform 07",
    "platform 08",
    "platform 09",
  ];
  break;

case "platform 07":
  output = [
    "Dev-Ops-07 Application Delivery Platform (Krakken)",
    "",
    "Status: Completed",
    "",
    "Capabilities:",
    "Centralized Administration",
    "Automation Workflows",
    "Linux Operations",
    "Service Integration",
    "Infrastructure Documentation",
  ];
  break;

case "platform 08":
  output = [
    "Dev-Ops-08 Backup & Data Protection Platform",
    "",
    "Status: Completed",
    "",
    "Capabilities:",
    "Multi-Tier Backup Architecture",
    "Replication",
    "Archive Storage",
    "Cloud Offsite Protection",
    "Recovery Validation",
  ];
  break;

case "platform 09":
  output = [
    "══════════════════════════════",
    "DEV-OPS-09",
    "══════════════════════════════",
    "",
    "Security Station Deployment",
    "& Recovery Platform",
    "",
    "STATUS",
    "Live Production",
    "",
    "TECHNOLOGY",
    "Hyper-V",
    "Clonezilla",
    "PowerShell",
    "Ansible",
    "WinRM",
    "",
    "VALIDATION",
    "VM Deployment",
    "Kiosk Validation",
    "Scanner Validation",
    "Recovery Automation",
  ];
  break;

case "whoami":
        output = [
          "Orlando Solis",
          "",
          "Infrastructure Engineer",
          "Automation Enthusiast",
          "Platform Builder",
        ];
        break;
case "skills":
  output = [
    "══════════════════════════════",
    "TECHNOLOGY ECOSYSTEM",
    "══════════════════════════════",
    "",
    "Infrastructure",
    "Azure • Active Directory • Hyper-V • Proxmox • Windows Server • Linux",
    "",
    "Automation",
    "Ansible • Terraform • PowerShell • Python • Bash • WinRM",
    "",
    "Security",
    "WireGuard • PKI • mTLS • Zero Trust • Ansible Vault",
    "",
    "Observability",
    "Grafana • Prometheus • PostgreSQL • FinOps",
    "",
    "Recovery",
    "Clonezilla • Backup Automation • RAID Replication • Disaster Recovery • Recovery Validation",
    "",
    "Endpoint Management",
    "Fleet OSS • Orbit • osquery • Multi-OS Management",
    "",
    "Platforms & Development",
    "Next.js • React • Tailwind CSS • GitHub",
  ];
  break;

case "current":
  output = [
    "CURRENT FOCUS",
    "",
    "DEV-OPS-07",
    "Application Delivery Platform",
    "",
    "DEV-OPS-08",
    "Backup & Data Protection Platform",
    "",
    "DEV-OPS-09",
    "Security Station Deployment & Recovery Platform",
  ];
  break;

case "journey":
  output = [
    "Current Focus",
    "",
    "Dev-Ops-07 Application Delivery Platform",
    "Dev-Ops-08 Backup & Data Protection Platform",
    "Dev-Ops-09 Security Station Deployment & Recovery Platform",
  ];
  break;

case "platforms":
  output = [
    "Dev-Ops-01 Secure Remote Operations Platform",
    "Dev-Ops-02 Multi-OS Automation Platform",
    "Dev-Ops-03 Hybrid Infrastructure Provisioning Platform",
    "Dev-Ops-04 FinOps & Cost Observability Platform",
    "Dev-Ops-05 Certificate Lifecycle & Security Response Platform",
    "Dev-Ops-06 High Availability & Recovery Automation Platform",
    "Dev-Ops-07 Application Delivery Platform (Krakken)",
    "Dev-Ops-08 Backup & Data Protection Platform",
    "Dev-Ops-09 Security Station Deployment & Recovery Platform",
  ];
  break;

case "platform":
  output = [
    "Usage:",
    "",
    "platform 01",
    "platform 02",
    "platform 03",
    "platform 04",
    "platform 05",
    "platform 06",
    "platform 07",
    "platform 08",
    "platform 09",
  ];
  break;

case "platform 07":
  output = [
    "Dev-Ops-07 Application Delivery Platform",
    "",
    "Status: Completed",
    "",
    "Capabilities:",
    "Centralized Administration",
    "Automation Workflows",
    "Linux Operations",
    "Service Integration",
    "Infrastructure Documentation",
  ];
  break;

case "platform 08":
  output = [
    "Dev-Ops-08 Backup & Data Protection Platform",
    "",
    "Status: Completed",
    "",
    "Capabilities:",
    "Multi-Tier Backups",
    "Replication",
    "Archive Storage",
    "Cloud Protection",
    "Recovery Validation",
  ];
  break;

case "platform 09":
  output = [
    "Dev-Ops-09 Security Station Deployment & Recovery Platform",
    "",
    "Status: Live Production",
    "",
    "Technology:",
    "Hyper-V",
    "Clonezilla",
    "PowerShell",
    "Ansible",
    "WinRM",
    "",
    "Validation:",
    "VM Deployment",
    "Kiosk Validation",
    "Scanner Validation",
    "Recovery Automation",
  ];
  break;

case "resume":
  output = [
    "Luis Orlando Solis",
    "",
    "Infrastructure Automation",
    "Hybrid Cloud",
    "Site Reliability Engineering",
    "",
    "Type:",
    "skills",
    "platforms",
    "contact",
  ];
  break;

case "contact":
  output = [
    "CONTACT CONSOLE",
    "",
    "GitHub",
    "github.com/luisorlandosolis",
    "",
    "LinkedIn",
    "linkedin.com/in/luis-orlando-solis-8564bbb2",
    "",
    "Professional Resume",
    "Available Upon Request",
    "",
    "Portfolio Documentation",
    "Available In Portfolio Profile",
    "",
    "Current Focus",
    "Platform Engineering",
    "Infrastructure Automation",
    "Hybrid Cloud",
    "Site Reliability Engineering",
  ];
  break;
      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = [`Command not found: ${cmd}`];
    }

if (cmd !== "help" && cmd !== "clear") {
  output.push("");
  output.push("· type 'help' to view available commands");
}

setHistory([
  `$ ${cmd}`,
  "",
  ...output,
  "",
]);
    setInput("");
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

<div className="p-6 font-mono text-sm min-h-[400px]">
  {history.map((line, i) => (
    <div
      key={i}
      className={
        line.startsWith("· ")
          ? "text-xs text-gray-500 mt-2"
          : ""
      }
    >
      {line}
    </div>
  ))}

  <div className="flex mt-4">
    <span className="text-[#58a6ff] mr-2">$</span>

    <input
      ref={inputRef}
      autoFocus
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          execute(input);
        }
      }}
      className="bg-transparent outline-none flex-1 text-[#58a6ff]"
    />
  </div>
</div>
    </div>
  );
}

