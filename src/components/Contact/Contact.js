import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-heading-div ">
        <center className="animate__animated animate__fadeInUp animate__slow">
          Contact Us
        </center>
      </div>

      <div className="gmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.100575505658!2d-122.41095348524306!3d37.787682679757125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5487234aff79528b%3A0xde3bb3f47c324048!2sThe%20Westin%20St.%20Francis%20San%20Francisco%20on%20Union%20Square!5e0!3m2!1sen!2sin!4v1665233366395!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="googlemap"
        ></iframe>
      </div>
      <div className="contact-container">
        <div className="col-25 animate__animated animate__fadeInUp animate__slower">
          <div>
            <div className="title-head">EMAIL</div>
            <br />
            <div className="title-body">myWorld_support@website.com</div>
          </div>
          <div>
            <div className="title-head">PHONE</div>
            <br />
            <div className="title-body">800-123-456</div>
          </div>
          <div>
            <div className="title-head">ADDRESS</div>
            <br />
            <div className="title-body">
              23 Evergreen Street,
              <br />
              San Francisco, California
              <br />
              USA
            </div>
          </div>
        </div>
        <div className="col-75 animate__animated animate__fadeInUp animate__slower">
          <div>
            <div className="title-head">ADDRESS</div>
            <br />
            <div className="title-body">
              Drop us your message and we'll get back to you as soon as
              possible.
            </div>
          </div>
          <div>
            <div>
              <input type="text" className="cont-inp" placeholder="your name" />
              <input
                type="text"
                className="cont-inp"
                placeholder="your company"
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="text"
                className="cont-inp"
                placeholder="your phone"
              />
              <input
                type="text"
                className="cont-inp"
                placeholder="your email"
              />
            </div>
          </div>
          <div>
            <div>
              <textarea placeholder="your message" className="mssg-area" />
            </div>
          </div>
          <div>
            <button className="cont-btn">Let's Talk</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
