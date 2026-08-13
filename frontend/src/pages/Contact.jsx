import { useState } from 'react';

const INITIAL_FORM = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('sent');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="contact page-section">
      <p className="section-eyebrow">Get In Touch</p>
      <h1 className="section-heading">
        Ready to build, grow, automate or secure your business?
      </h1>

      <div className="contact__grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          <p role="status" aria-live="polite" className="contact-form__status">
            {status === 'sent' && 'Thanks — we\u2019ll be in touch shortly.'}
            {status === 'error' &&
              'Something went wrong sending your message. Please try again or email us directly.'}
          </p>
        </form>

        <div className="contact-details">
          <div>
            <h2>Email</h2>
            <p><a href="mailto:hello@seyontechnologies.com">hello@seyontechnologies.com</a></p>
          </div>

          <div>
            <h2>Phone &amp; Location</h2>
            <p><a href="tel:+910000000000">+91 00000 00000</a></p>
            <p>Chennai, Tamil Nadu, India</p>
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
        {/*
          Replaceable Google Maps embed. Swap the `src` below with your
          own embed URL from Google Maps → Share → Embed a map.
        */}
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
  );
}
