"use client";

import { useState } from "react";
import LeadpointMark from "./LeadpointMark";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <span className="logo-dot" />
        ali hamza
      </div>
      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={open ? "open" : undefined}>
        <li className="badge">
          <span className="logo-dot" style={{ animation: "pulseDot 1.6s ease-in-out infinite" }} />
          Open to opportunities
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <LeadpointMark />
        </li>
      </ul>
    </nav>
  );
}
