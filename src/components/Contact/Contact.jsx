
import React from 'react';
import './Contact.css';

function Contact() {

  const contactlink = [
    {
      name: 'Email',
      value: 'alvinjoyk4@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="3"
            stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 7L12 13L20 7"
            stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Phone',
      value: '7034083385',
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7 3H5C3.9 3 3 3.9 3 5
            C3 13.8 10.2 21 19 21
            C20.1 21 21 20.1 21 19V17
            L16 15L14 17
            C10.8 15.7 8.3 13.2 7 10L9 8L7 3Z"
            stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Location',
      value: 'Ernakulam, Kerala, India',
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M20 10C20 15 12 22 12 22
            S4 15 4 10A8 8 0 1 1 20 10Z"
            stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="10" r="2.5"
            stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:alvinjoyk4@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fullcontactpage">

      <h1 className="head1">Get in Touch</h1>

      <p className="contactdesrc">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <div id="fullcontactform">

        {/* LEFT SIDE */}

        <div id="leftside">

          <h3 className="contacthead">Let's Connect!</h3>

          <p className="contactheaddesrc">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div id="contacticons">

            {contactlink.map((m, index) => (
              <div key={index} className="boxcontact">

                <div className="icon">
                  {m.icon}
                </div>

                <div className="secondpart">
                  <p className="namett">{m.name}</p>
                  <p className="valueoffn">{m.value}</p>
                </div>

              </div>
            ))}

            <a
              href="https://github.com/alvin-45"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Visit My GitHub Profile
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div id="rightside">

          <form onSubmit={handleSubmit}>

            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Mail id"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your Query..."
              required
            />

            <button type="submit">
              ➤ &nbsp; Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;
