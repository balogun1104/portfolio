import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contacts = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ojncigv', 'template_6omy4k8', form.current, 'user_4vh3pCr0SPSxiz1lcKwMA')
      .then((result) => {
          alert('Message Sent successfully')
      }, (error) => {
         alert(error.message);
      });
      e.target.reset();
  };
  return (
    <div id="Contact" className="contacts">
      <div className="text-center">
        <h1>Write Me</h1>
        <p>For more information write to us or call +234 810 321 8560.</p>
      </div>
      <div className="container"  > 
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* name input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name" required
                  name="client-name"
                  id="validationCustom01"
                  required
                />
                <div className="line"></div>
              </div>
              {/* phone input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telephone"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              {/* email input */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
                />
                <div className="line"></div>
              </div>
              {/* subject input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* subject input */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please send your comments here... "
                  name="message"
                  required
                ></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn " type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;