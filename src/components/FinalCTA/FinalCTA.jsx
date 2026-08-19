import logo from '../../assets/images/logo-white.png';
import pattern from '../../assets/images/brand-pattern.png';
import './FinalCTA.css';

export default function FinalCTA() {
  const googleForm =
    'https://docs.google.com/forms/d/1M8GNOnSw_7QsPqP49i7lhmVMShqDtVT81xPSXWu2iYE/viewform';

  return (
    <section
      className="section final"
      id="final"
      style={{ '--finalPattern': `url(${pattern})` }}
    >
      <div className="wrap final-inner reveal">

        <img
          className="final-logo"
          src={logo}
          alt="The Appointment"
        />

        <span className="final-label">
          THIS IS YOUR MOMENT
        </span>

        <h2>
          One day, every person will have an appointment with God.
        </h2>

        <p className="final-text">
          Choose to make meeting with Him a regular part of your life.
          Join believers from different cities and nations as we seek
          God's presence through prayer, fellowship, and faithful living.
        </p>

        <a
          className="btn final-btn"
          href={googleForm}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join The Appointment
          <span>→</span>
        </a>

        <small>
          Complete the registration form to join The Appointment community.
        </small>

      </div>
    </section>
  );
}