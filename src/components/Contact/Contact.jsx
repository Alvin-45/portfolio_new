import React from 'react';
import './Contact.css';

const Contact = () => {
return (
<div className="fullcontactpage">
<h1 className="head1">Get in Touch</h1>
<p className="contactdesrc">Feel free to reach out for collaborations or just a friendly hello!</p>
<div id="fullcontactform">
    <div id="leftside"> 
        <h3 className="contacthead">Let's Connect!</h3>
        <p className="contactdesrc">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below or send me a message directly.</p>
        <div id="contacticons">
            <a href="mailto:alvinjoyk4@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill contacticon" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zM16 4.697l-5.803 3.546L16 11.801V4.697z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/alvin-joy-4b0b1b1b1/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin contacticon" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c0 .678 0 7.225 0 7.225z"/>
                </svg>
            </a>
            <a href="https://github.com/alvin-45" target="_blank" rel="noopener noreferrer">
                
            </a>
        </div>  
    </div>
    <div id="rightside">
     <label htmlFor="name">Name:</label>
     <input type="text" id="name" name="name" />
     <label htmlFor="email">Email:</label>
     <input type="email" id="email" name="email" />
     <label htmlFor="message">Message:</label>
     <textarea id="message" name="message"></textarea>
     <button type="submit">Send Message</button>
    </div>
</div>
</div>
);
};

export default Contact;