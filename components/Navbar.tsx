"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/apex-strike", label: "Apex Strike" },
    { href: "/convora", label: "Convora" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          <Image
            src="/connectdevs-logo.jpg"
            alt="ConnectDevs"
            width={40}
            height={28}
            priority
            className="navbar-logo"
          />
          <span className="navbar-name">CONNECTDEVS</span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${pathname === link.href ? "navbar-link-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`burger-line ${menuOpen ? "burger-open" : ""}`} />
          <span className={`burger-line ${menuOpen ? "burger-open" : ""}`} />
          <span className={`burger-line ${menuOpen ? "burger-open" : ""}`} />
        </button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(6, 10, 20, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(59, 142, 245, 0.08);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .navbar-logo {
          border-radius: 8px;
        }
        .navbar-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 2px;
          background: linear-gradient(90deg, #3B8EF5, #F5841F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .navbar-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: #7D8BA3;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
          letter-spacing: 0.3px;
        }
        .navbar-link:hover {
          color: #E4EAF5;
          background: rgba(59, 142, 245, 0.06);
        }
        .navbar-link-active {
          color: #E4EAF5;
          background: rgba(59, 142, 245, 0.1);
        }
        .navbar-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          flex-direction: column;
          gap: 5px;
        }
        .burger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #7D8BA3;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .burger-open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .burger-open:nth-child(2) {
          opacity: 0;
        }
        .burger-open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 20px;
          }
          .navbar-burger {
            display: flex;
          }
          .navbar-links {
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            background: rgba(6, 10, 20, 0.95);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            flex-direction: column;
            padding: 16px;
            gap: 4px;
            border-bottom: 1px solid rgba(59, 142, 245, 0.08);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .navbar-links-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .navbar-link {
            width: 100%;
            padding: 12px 16px;
          }
        }
      `}</style>
    </header>
  );
}
