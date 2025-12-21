"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AltArrowDownBold, HamburgerMenuLinear } from "solar-icon-set";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Reusable NavLink component with active state
  const NavLink = ({ href, children, className = "", onClick }) => (
    <Link
      href={href}
      className={`${className} ${isActive(href) ? "active" : ""}`}
      style={isActive(href) ? { fontWeight: "bold" } : {}}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  // Menu data to eliminate duplication
  const driveMenu = [
    { href: "/class-b", label: "Auto" },
    { href: "/class-a", label: "MOTORRAD" },
    { href: "/class-d", label: "AUTO-ANHÄNGER" },
    { href: "/class-c", label: "TRAKTOR" },
  ];

  const servicesMenu = [
    { href: "/7-14-days", label: "Dein Führerschein in nur 7-14 Tagen" },
    { href: "/vr", label: "DEGENER 360° - Fahrsimulator" },
    { href: "/financing", label: "Führerschein finanzieren" },
    { href: "/digital-services", label: "Digitale Dienste" },
    { href: "/theory-test", label: "Fragen für die Theorieprüfung" },
  ];

  const mainMenu = [
    { href: "/contact", label: "kontakt" },
    { href: "/about", label: "Über uns" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header id="header" className={`wrapper flex-row ${mobileOpen ? "mobile-open" : ""}`}>
      <Link href="/" className="logo">
        <img src="/img/logo.png" alt="" />
      </Link>

      <nav className="nav flex-row">
        <div className="site-nav flex-row">
          {mainMenu.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.label}
            </NavLink>
          ))}

          <div className="dropdown">
            <div className="dropdown-toggle flex-row">
              <strong
                style={
                  driveMenu.some((m) => isActive(m.href)) ? { fontWeight: "bold" } : {}
                }
              >
                Führerschein machen
              </strong>
              <AltArrowDownBold />
            </div>
            <ul className="dropdown-menu">
              {driveMenu.map((item, index) => (
                <li key={index}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="dropdown">
            <div className="dropdown-toggle flex-row">
              <strong
                style={
                  servicesMenu.some((m) => isActive(m.href)) ? { fontWeight: "bold" } : {}
                }
              >
                Dienstleistungen
              </strong>
              <AltArrowDownBold />
            </div>
            <ul className="dropdown-menu">
              {servicesMenu.map((item, index) => (
                <li key={index}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cta">
          <NavLink href="/contact" className="btn-pr">
            JETZT ANMELDEN
          </NavLink>
        </div>
      </nav>

      <button
        className={`burger ${mobileOpen ? "open" : ""}`}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        onClick={() => setMobileOpen((s) => !s)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        <HamburgerMenuLinear size={32} />
      </button>

      <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          {mainMenu.map((item, index) => (
            <li key={index}>
              <NavLink href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}

          <li className="mobile-sub">
            <details>
              <summary
                style={
                  driveMenu.some((m) => isActive(m.href)) ? { fontWeight: "bold" } : {}
                }
              >
                Führerschein machen
              </summary>
              <ul>
                {driveMenu.map((item, index) => (
                  <li key={index}>
                    <NavLink href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          <li className="mobile-sub">
            <details>
              <summary
                style={
                  servicesMenu.some((m) => isActive(m.href)) ? { fontWeight: "bold" } : {}
                }
              >
                Dienstleistungen
              </summary>
              <ul>
                {servicesMenu.map((item, index) => (
                  <li key={index}>
                    <NavLink href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          <li className="mobile-cta">
            <NavLink href="/contact" onClick={() => setMobileOpen(false)}>
              JETZT ANMELDEN
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
