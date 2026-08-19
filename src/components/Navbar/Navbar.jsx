import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo-green.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const googleForm =
    'https://docs.google.com/forms/d/1M8GNOnSw_7QsPqP49i7lhmVMShqDtVT81xPSXWu2iYE/viewform';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="wrap nav-inner">

        <a className="nav-brand" href="#top">
          <img src={logo} alt="The Appointment" />
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#gather" onClick={() => setOpen(false)}>
            Gatherings
          </a>

          <a href="#join" onClick={() => setOpen(false)}>
            Join
          </a>

          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
        </nav>

        <a
          className="nav-cta"
          href={googleForm}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Join Us</span>
          <span className="nav-arrow">↗</span>
        </a>

        <button
          className={`menu ${open ? 'active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}