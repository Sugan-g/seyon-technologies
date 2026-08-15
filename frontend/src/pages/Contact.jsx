import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const SERVICES = [
  'Web Design',
  'Web Development',
  'Software Development',
  'ERP / CRM Development',
  'Cybersecurity',
  'SEO',
  'Other'
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
  const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setStatus('sent');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Seyon Technologies | Start a Project</title>

        <meta
          name="description"
          content="Contact Seyon Technologies to discuss software development, AI solutions, automation, web development, and cybersecurity projects."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.seyontechnologies.com/contact"
        />
      </Helmet>

      <section className="contact page-section">
        <p className="section-eyebrow">Get In Touch</p>

        <h1 className="section-heading">
          Ready to build, grow, automate or secure your business?
        </h1>

        <div className="contact__grid">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* First Name */}
            <label htmlFor="firstName">First Name</label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              placeholder="Enter your first name"
            />

            {/* Last Name */}
            <label htmlFor="lastName">Last Name</label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              placeholder="Enter your last name"
            />

            {/* Email */}
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@example.com"
            />

            {/* Contact Number */}
            <label htmlFor="phone">Contact Number</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              inputMode="tel"
              placeholder="+91 98765 43210"
            />

            {/* Service */}
            <label htmlFor="service">Service</label>

            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service
              </option>

              {SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            {/* Message */}
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project, requirements, or goals..."
            />

            {/* Submit */}
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? 'Sending…'
                : 'Send Message'}
            </button>

            {/* Status */}
            <p
              role="status"
              aria-live="polite"
              className="contact-form__status"
            >
              {status === 'sent' &&
                'Thanks — your message has been sent successfully. We’ll be in touch shortly.'}

              {status === 'error' &&
                'Something went wrong sending your message. Please try again or email us directly.'}
            </p>
          </form>

          <div className="contact-details">
            <div>
              <h2>Email</h2>

              <p>
                <a href="mailto:hello@seyontechnologies.com">
                  hello@seyontechnologies.com
                </a>
              </p>
            </div>

            <div>
              <h2>Phone &amp; Location</h2>

              <p>
                <a href="tel:+919384256306">
                  +91 9384256306
                </a>
              </p>

              <p>
                4/47A &amp; 6/47B, Ram Colony, West Mambalam,
                Chennai-600033
              </p>
            </div>

            <div>
              <h2>Business Hours</h2>

              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>

              <p>Saturday – Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="contact-map">
          <h2>Find Us</h2>

          <iframe
            title="Seyon Technologies location"
            src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu,India&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}