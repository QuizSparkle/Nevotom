import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="pagetitle">
        <h1>Contact</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Contact</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <div className="col-lg-12">
        <div className="row">
          {/* Recent Sales */}
          <div className="col-12">
            <div className="card recent-sales overflow-auto">
              
              <div className="card-body">
                <section id="contact" className="contact">
                  <div className="container" data-aos="fade-up">
                    <div className="section-title">
                      <h2>Contact Us</h2>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="info-box">
                              <i className="bx bx-map"></i>
                              <h3>Address</h3>
                              <p>Ahtri tn 12, 10151 Tallinn, Estonia </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="info-box mt-4">
                              <i className="bx bx-envelope"></i>
                              <h3>Email</h3>
                              <p>
                                nevotomofficial@gmail.com
                                <br />
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="info-box mt-4">
                              <i className="bx bx-phone-call"></i>
                              <h3>Whatsapp</h3>
                              <p>
                                +33 617 98 2358
                                <br />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 mt-lg-0 mt-4">
                        <form
                          action="forms/contact.php"
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <div className="row">
                            <div className="col-md-6 form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            <div className="col-md-6 form-group mt-md-0 mt-3">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group mt-3">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>
                          <div className="form-group mt-3">
                            
                            <textarea
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              required
                            ></textarea>
                          </div>
                          <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                              Your message has been sent. Thank you!
                            </div>
                          </div>
                          <div className="text-center">
                            <button id="usebutcases" type="submit">
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          {/* End Recent Sales */}
        </div>
      </div>
    </div>
  )
}

export default Contact
