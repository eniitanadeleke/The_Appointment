import pattern from '../../assets/images/brand-pattern.png';
import './Join.css';

const ways = [
  [
    'i.',
    'Community Member',
    'Receive weekly encouragement, prayer updates, biblical teachings, and invitations to all gatherings.'
  ],
  [
    'ii.',
    'Volunteer',
    'Serve through administration, media, hospitality, event coordination, communications, and outreach.'
  ],
  [
    'iii.',
    'Prayer Facilitator',
    'Lead prayer sessions after completing our facilitator orientation and mentoring process.'
  ],
  [
    'iv.',
    'Partner',
    'Support The Appointment through financial giving, professional expertise, resources, or strategic collaboration.'
  ],
  [
    'v.',
    'Church Partner',
    'Partner with us to host city prayer conferences and strengthen prayer within your local community.'
  ]
];

export default function Join() {

  const googleForm =
    'https://docs.google.com/forms/d/1M8GNOnSw_7QsPqP49i7lhmVMShqDtVT81xPSXWu2iYE/viewform';

  return (
    <section
      className="section join"
      id="join"
      style={{ '--joinPattern': `url(${pattern})` }}
    >
      <div className="wrap">

        <div className="join-head reveal">
          <span className="eyebrow">Join Us</span>

          <h2>There is a place for everyone.</h2>

          <p>
            Everything begins with one simple step. Choose how you want
            to belong, and grow with a community committed to prayer
            and purpose.
          </p>
        </div>

        <div className="ways">

          {ways.map((way) => (
            <article
              className="way reveal"
              key={way[1]}
            >
              <span>{way[0]}</span>

              <h3>{way[1]}</h3>

              <p>{way[2]}</p>
            </article>
          ))}

          <article className="way way-cta reveal">

            <h3>Ready to begin?</h3>

            <p>
              Join our community, and we will welcome you in.
            </p>

            <a
              className="btn btn-primary"
              href={googleForm}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us Today →
            </a>

          </article>

        </div>

      </div>
    </section>
  );
}