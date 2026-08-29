"use client";

import { useEffect, useRef, useState } from "react";
import MeshBackground from "@/components/MeshBackground";
import Terminal from "@/components/Terminal";
import MermaidDiagram from "@/components/MermaidDiagram";

const NAV_ITEMS = [
  "Home",
  "Terminal",
  "Journey",
  "Platforms",
  "Portfolio",
  "Contact",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeView, setActiveView] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [flashing, setFlashing] = useState(false);

  const [indicator, setIndicator] = useState({
    top: 0,
    height: 0,
  });

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const moveIndicatorTo = (index: number) => {
    const el = itemRefs.current[index];

    if (el) {
      setIndicator({
        top: el.offsetTop,
        height: el.offsetHeight,
      });
    }
  };

  useEffect(() => {
    moveIndicatorTo(0);
  }, []);

  function handleNavClick(index: number, label: string) {
    setActiveIndex(index);
    moveIndicatorTo(index);

    if (label === "Home") {
      setActiveView("home");
    }

    if (label === "Terminal") {
      setFlashing(true);
      setActiveView("terminal");

      setTimeout(() => setFlashing(false), 550);
    }

    if (label === "Journey") {
      setActiveView("journey");
    }

    if (label === "Platforms") {
      setActiveView("platforms");
    }

    if (label === "Portfolio") {
      setActiveView("resume");
    }

    if (label === "Contact") {
      setActiveView("contact");
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0d1117] text-white overflow-hidden">
      <MeshBackground />

      <div
        className="absolute top-6 right-8 z-50 cursor-pointer group text-right"
        onClick={() => {
          const existing = document.getElementById(
            "os-intro-audio"
          ) as HTMLAudioElement | null;

          if (existing) {
            if (!existing.paused) return;

            existing.currentTime = 0;
            existing.play();

            return;
          }

          const audio = new Audio("/audio/sample_Site.wav");

          audio.id = "os-intro-audio";
          audio.volume = 0.15;

          document.body.appendChild(audio);

          audio.play();
        }}
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#58a6ff] transition">
          ▶ Inspiration
        </div>

        <div className="font-mono text-[10px] text-gray-600 mt-2 leading-relaxed hover:text-gray-400 transition">
          Inigo Kennedy
          <br />
          Castles In The Air
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex">
<div className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4 border-b border-gray-800 bg-black/95 flex items-center gap-4">
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="text-[#58a6ff] text-2xl"
  >
    ☰
  </button>

  <div className="font-mono text-2xl text-[#58a6ff]">
    O/S_
  </div>
</div>

{mobileMenuOpen && (
<div className="md:hidden fixed top-[73px] left-0 w-64 h-screen z-40 bg-black/95 border-r border-gray-800">
    {[
      "Home",
      "Terminal",
      "Journey",
      "Platforms",
      "Portfolio",
      "Contact",
    ].map((label, index) => (
      <div
        key={label}
        onClick={() => {
          handleNavClick(index, label);
          setMobileMenuOpen(false);
        }}
        className="p-4 border-b border-gray-800 text-gray-300 hover:text-[#58a6ff] cursor-pointer"
      >
        {label}
      </div>
    ))}
  </div>
)}
        <aside className="hidden md:flex w-64 border-r border-gray-800 p-8 flex-col">
          <div className="font-mono text-3xl text-[#58a6ff] mb-12 tracking-tight">
            O/S_
          </div>

          <nav className="relative space-y-6 font-mono">
            <span
              className={`absolute left-0 w-[2px] bg-[#58a6ff] rounded-full transition-all duration-300 ease-out ${
                flashing ? "animate-indicator-flash" : ""
              }`}
              style={{
                top: indicator.top,
                height: indicator.height || 24,
              }}
            />

            {NAV_ITEMS.map((label, index) => (
              <div
                key={label}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => handleNavClick(index, label)}
                className={`pl-4 cursor-pointer transition-colors duration-200 ${
                  index === activeIndex
                    ? "text-[#58a6ff]"
                    : "text-gray-400 hover:text-[#58a6ff]"
                }`}
              >
                {label}
              </div>
            ))}
          </nav>
        </aside>

          <section className="flex-1 px-6 md:px-12 pt-28 md:pt-24 pb-12">
          <div className="max-w-4xl">
            <div className="text-[#58a6ff] uppercase tracking-[0.3em] mb-4">
              Infrastructure Engineer
            </div>

<h1 className="text-5xl md:text-7xl font-bold mb-8">
  Orlando Solis
</h1>
             <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
              Building automation-first platforms across Linux,
              Windows, Azure, Proxmox, Active Directory,
              and hybrid cloud environments.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <a
                href="https://github.com/luisorlandosolis"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-[#58a6ff] text-black font-medium hover:opacity-90 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/luis-orlando-solis-8564bbb2/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff] hover:text-black transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-24">
              {activeView === "terminal" && <Terminal />}

{activeView === "journey" && (
  <div className="border border-gray-800 rounded-xl p-8 bg-black/20">
    <h2 className="text-4xl font-bold text-[#58a6ff] mb-8">
      Journey
    </h2>

    <div className="space-y-6">

      <div className="border border-gray-800 rounded-lg p-4">
        <div className="text-[#58a6ff] font-mono mb-2">
          PHASE 1
        </div>

        <div className="font-semibold">
          Foundation
        </div>

        <div className="text-gray-400 mt-2">
          Active Directory • Hyper-V • Linux • Windows •
          Azure • Proxmox • Hybrid Infrastructure
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-4">
        <div className="text-[#58a6ff] font-mono mb-2">
          PHASE 2
        </div>

        <div className="font-semibold">
          Platform Engineering
        </div>

        <div className="text-gray-400 mt-2">
          Automation • Infrastructure as Code •
          Configuration Management • Observability
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-4">
        <div className="text-[#58a6ff] font-mono mb-2">
          PHASE 3
        </div>

        <div className="font-semibold">
          DevSecOps
        </div>

        <div className="text-gray-400 mt-2">
          PKI • Certificates • mTLS • Security Automation •
          Fleet Management • Security Response
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-4">
        <div className="text-[#58a6ff] font-mono mb-2">
          PHASE 4
        </div>

        <div className="font-semibold">
          Site Reliability Engineering
        </div>

        <div className="text-gray-400 mt-2">
          Real-World Outage Recovery • Recovery Automation •
          High Availability • Operational Resilience
        </div>
      </div>

      <div className="border border-[#58a6ff] rounded-lg p-4 bg-[#58a6ff]/5">
        <div className="text-[#58a6ff] font-mono mb-2">
          PHASE 5
        </div>

        <div className="font-semibold">
          Production Platforms
        </div>

        <div className="text-gray-400 mt-2">
          Dev-Ops-07 Application Delivery Platform
          <br />
          Dev-Ops-08 Multi-OS Hybrid Data Resilience & Preventive Disaster Recovery Platform
          <br />
          Dev-Ops-09 Security Station Deployment Platform
        </div>
      </div>
      <div className="border border-gray-800 rounded-lg p-4">
        <div className="text-[#58a6ff] font-mono mb-2">
          RECOGNITION
        </div>

        <div className="text-gray-300 italic">
          "Orlando's team player mind-set, enthusiastic embrace of change,
          ability to work with minimalistic supervision and unwavering
          commitment to exceeding expectations set him apart."
        </div>

        <div className="mt-3">
          <div className="font-semibold">Hiroko Yamamura</div>
          <div className="text-gray-400">
            Executive Director of IT, School of the Art Institute of Chicago
          </div>
        </div>

        <div className="border-t border-gray-800 my-4"></div>

        <div className="text-gray-300 italic">
          "Orlando has been a key contributor in helping SAIC coordinate and
          integrate technology throughout the last 10 years. His commitment
          and camaraderie have been invaluable."
        </div>

        <div className="mt-3">
          <div className="font-semibold">Ursula Sokolowska</div>
        </div>
      </div>

    </div>
  </div>
)}

{activeView === "platforms" && (
  <div className="border border-gray-800 rounded-xl p-8 bg-black/20">
    <h2 className="text-4xl font-bold text-[#58a6ff] mb-8">
      Platforms
    </h2>

    <div className="space-y-4">

<a
  href="https://github.com/luisorlandosolis/dev-ops-01-secure-remote-operations-platform"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setSelectedPlatform("01")}
  className={`block rounded-lg p-4 transition duration-200 ${
    selectedPlatform === "01"
      ? "border border-[#58a6ff] bg-[#58a6ff]/10"
      : "border border-gray-800 hover:border-[#58a6ff] hover:bg-[#58a6ff]/5"
  }`}
>
  <div className="text-[#58a6ff] font-mono mb-2">
    DEV-OPS-01
  </div>

  <div>
    Secure Remote Operations Platform
  </div>
</a>

<a
  href="https://github.com/luisorlandosolis/dev-ops-02-multi-os-automation-platform"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setSelectedPlatform("02")}
  className={`block rounded-lg p-4 transition duration-200 ${
    selectedPlatform === "02"
      ? "border border-[#58a6ff] bg-[#58a6ff]/10"
      : "border border-gray-800 hover:border-[#58a6ff] hover:bg-[#58a6ff]/5"
  }`}
>
  <div className="text-[#58a6ff] font-mono mb-2">DEV-OPS-02</div>
  <div>Multi-OS Automation Platform</div>
</a>

<a
  href="https://github.com/luisorlandosolis/dev-ops-03-hybrid-infrastructure-provisioning-platform"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setSelectedPlatform("03")}
  className={`block rounded-lg p-4 transition duration-200 ${
    selectedPlatform === "03"
      ? "border border-[#58a6ff] bg-[#58a6ff]/10"
      : "border border-gray-800 hover:border-[#58a6ff] hover:bg-[#58a6ff]/5"
  }`}
>
  <div className="text-[#58a6ff] font-mono mb-2">DEV-OPS-03</div>
  <div>Hybrid Infrastructure Provisioning Platform</div>
</a>

<a
  href="https://github.com/luisorlandosolis/dev-ops-04-finops-cost-observability-platform"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setSelectedPlatform("04")}
  className={`block rounded-lg p-4 transition duration-200 ${
    selectedPlatform === "04"
      ? "border border-[#58a6ff] bg-[#58a6ff]/10"
      : "border border-gray-800 hover:border-[#58a6ff] hover:bg-[#58a6ff]/5"
  }`}
>
  <div className="text-[#58a6ff] font-mono mb-2">DEV-OPS-04</div>
  <div>FinOps & Cost Observability Platform</div>
</a>

<a
  href="https://github.com/luisorlandosolis/dev-ops-05-certificate-lifecycle-security-response-platform"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setSelectedPlatform("05")}
  className={`block rounded-lg p-4 transition duration-200 ${
    selectedPlatform === "05"
      ? "border border-[#58a6ff] bg-[#58a6ff]/10"
      : "border border-gray-800 hover:border-[#58a6ff] hover:bg-[#58a6ff]/5"
  }`}
>
  <div className="text-[#58a6ff] font-mono mb-2">DEV-OPS-05</div>
  <div>Certificate Lifecycle & Security Response Platform</div>
</a>

<a
  href="https://github.com/luisorlandosolis/dev-ops-06-hybrid-infrastructure-recovery-automation-platform"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setSelectedPlatform("06")}
  className={`block rounded-lg p-4 transition duration-200 ${
    selectedPlatform === "06"
      ? "border border-[#58a6ff] bg-[#58a6ff]/10"
      : "border border-gray-800 hover:border-[#58a6ff] hover:bg-[#58a6ff]/5"
  }`}
>
  <div className="text-[#58a6ff] font-mono mb-2">DEV-OPS-06</div>
  <div>Hybrid Infrastructure Recovery Automation Platform</div>
</a>

      <div className="border border-gray-800 rounded-lg p-4">
        <div className="text-[#58a6ff] font-mono mb-2">
          DEV-OPS-07
        </div>
        <div>Application Delivery Platform</div>
      </div>
<a
  href="https://github.com/luisorlandosolis/dev-ops-08-multi-os-hybrid-data-resilience-preventive-disaster-recovery-platform"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="border border-gray-800 rounded-lg p-4 hover:border-[#58a6ff] transition duration-200">
    <div className="text-[#58a6ff] font-mono mb-2">
      DEV-OPS-08
    </div>
    <div>
      Multi-OS Hybrid Data Resilience & Preventive Disaster Recovery Platform
    </div>
  </div>
</a>

<a
  href="https://github.com/luisorlandosolis/dev-ops-09-security-station-deployment-operations-platform"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="border border-gray-800 rounded-lg p-4 hover:border-[#58a6ff] transition duration-200">
    <div className="text-[#58a6ff] font-mono mb-2">
      DEV-OPS-09
    </div>

    <div className="font-semibold">
      Security Station Deployment Platform
    </div>

    <div className="text-sm text-gray-500 mt-2">
      Live Production Environment
    </div>
  </div>
</a>

    </div>
  </div>
)}

{activeView === "resume" && (
  <div className="border border-gray-800 rounded-xl p-8 bg-black/20">
    <h2 className="text-4xl font-bold text-[#58a6ff] mb-8">
      Portfolio Profile
    </h2>

    <div className="space-y-8">

      <div>
        <div className="text-[#58a6ff] font-mono mb-2">
          EXECUTIVE SUMMARY
        </div>

        <p className="text-gray-400">
          Platform Engineering • Infrastructure Automation •
          Hybrid Cloud • Site Reliability Engineering
        </p>
      </div>

      <div>
        <div className="text-[#58a6ff] font-mono mb-4">
          TECHNOLOGY ECOSYSTEM
        </div>

<MermaidDiagram
  chart={`
mindmap
  root((Orlando Solis))

    Infrastructure
      Azure
      Active Directory
      Hyper-V
      Proxmox
      Windows Server
      Linux

    Automation
      Ansible
      Terraform
      PowerShell
      Python
      Bash
      WinRM

    Security
      WireGuard
      PKI
      mTLS
      Zero Trust
      Ansible Vault

    Observability
      Grafana
      Prometheus
      PostgreSQL
      FinOps

    Recovery
      Clonezilla
      Backup Automation
      RAID Replication
      Disaster Recovery
      Recovery Validation

    Endpoint Management
      Fleet OSS
      Orbit
      osquery
      Multi-OS Management

    Platforms
      Software Distribution
      Data Resilience
      Security Station

`}
/>
</div>

<div>
  <div className="text-[#58a6ff] font-mono mb-2">
    CURRENT FOCUS
  </div>

  <div className="text-gray-400">
    Platform Engineering
    <br />
    Infrastructure Automation
    <br />
    Site Reliability Engineering
    <br />
    Operational Resilience
  </div>
</div>
<div>
<a  
    href="/documents/Orlando-Solis-Portfolio.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 rounded-lg border border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff] hover:text-black transition"
  >
    View Current Platform Engineering Portfolio
  </a>
</div>
    </div>
  </div>
)}

{activeView === "contact" && (
  <div className="border border-gray-800 rounded-xl p-8 bg-black/20">
    <h2 className="text-4xl font-bold text-[#58a6ff] mb-8">
      Contact Console
    </h2>

    <div className="max-w-2xl">
      <p className="text-gray-400 mb-8">
        Interested in discussing Platform Engineering,
        Infrastructure Automation, Hybrid Cloud,
        Site Reliability Engineering, or DevOps initiatives?
      </p>

<form
  action="https://formspree.io/f/xbgrgoea"
  method="POST"
  className="space-y-6"
>
        <div>
          <label className="block text-[#58a6ff] font-mono mb-2">
            NAME
          </label>

<input
  name="name"
  type="text"
  placeholder="Enter Name"
            className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#58a6ff] outline-none"
          />
        </div>

        <div>
          <label className="block text-[#58a6ff] font-mono mb-2">
            EMAIL
          </label>
<input
  name="email"
  type="email"
  placeholder="Enter Email"
  className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#58a6ff] outline-none"
/>
        </div>

        <div>
          <label className="block text-[#58a6ff] font-mono mb-2">
            MESSAGE
          </label>

<textarea
  name="message"
  rows={4}
  placeholder="Enter Message"
  className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#58a6ff] outline-none resize-none"
/>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-[#58a6ff] text-black font-medium hover:opacity-90 transition"
          >
            TRANSMIT
          </button>

          <a
            href="https://github.com/luisorlandosolis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff] hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/luis-orlando-solis-8564bbb2/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff] hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>

        <div className="pt-4 border-t border-gray-800 text-gray-400 text-sm">
          Professional CV Available Upon Request
        </div>

      </form>
    </div>
  </div>
)}

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
