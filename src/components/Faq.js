import React, { useState } from 'react'

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  const faqData = [
    {
      number: '1.',
      question: 'What is UASU OTC?',
      answer:
        'UASU is the premier open OTC platform for P2P native bitcoin options. This platform enables buyers and sellers to directly negotiate and finalize deals, streamlining the trading process for native bitcoin options. By connecting a global community of users, UASU not only amplifies the liquidity of Native Bitcoin options, but also enhances the price discovery process.',
    },
    {
      number: '2.',
      question: 'How do I start using the UASU platform?',
      answer:
        "UASU is an open-source protocol, accessible to anyone interested in P2P native bitcoin options. Access is gated only by the options principal; meaning you need to be able to either purchase the premium or lock in the necessary bitcoin collateral for a fully covered option. After understanding the access requirements, you can initiate or respond to open OTC listings tailored for P2P native bitcoin options. Begin by filling out our 'Create/Respond to Listing' form on the platform with your specific requirements. This allows you to compare offers from different participants. Once you've reviewed the offers, you can evaluate them to determine the best fit for your needs. If you'd like a guided overview of the UASU platform, please contact our team at demo@uasu.fi for a walkthrough.",
    },
    {
      number: '3.',
      question: 'What are the UASU platform fees?',
      answer:
        'UASU has a transparent pricing model for native bitcoin options. No hidden fees, and no abusive margins. Fees are paid by takers (those who respond to a listing). Makers (who post a listing) don’t pay fees. You can find our detailed fee schedule here. All listed option prices are exclusive of any external fees or costs associated with the individual trading strategies or execution.',
    },
    {
      number: '4.',
      question: 'What are the benefits of using UASU platform?',
      answer:
        'Ease of use: the UASU platform simplifies the process for users to initiate or respond to open OTC listings tailored for P2P native bitcoin options. Time savings: Using the UASU platform can significantly reduce the time needed to finalize deals by consolidating the process into a single, efficient platform. Price transparency: the UASU platform offers clear visibility into different offers, enabling users to easily identify the most favorable terms. Streamlined trading process: the UASU platform centralizes the trading process, ensuring that users can engage, evaluate, and execute trades seamlessly. UASU leverages the power and transparency of bitcoin technology for your trading needs.',
    },
  ]

  return (
    <div>
      <div className="pagetitle">
        <h1>FAQ</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Questions</a>
            </li>
            <li className="breadcrumb-item active">Answer</li>
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
                {/* <h5 className="card-title">Listed <span>| Today</span></h5> */}
                {/* <h3>Products</h3> */}
                <section id="faq" className="faq">
                  <div className="container">
                    <div className="text-center">
                      <h3 style={{ color: 'goldenrod' }}>
                        Frequently Asked Questions
                      </h3>
                    </div>

                    <div className="row gy-4">
                      <div
                        className="col-lg-12"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <div className="faq-container">
                          {faqData.map((item, index) => (
                            <div
                              className={`faq-item ${
                                activeIndex === index ? 'faq-active' : ''
                              }`}
                              key={index}
                            >
                              <h3 onClick={() => handleItemClick(index)}>
                                <span className="num">{item.number}</span>{' '}
                                <span>{item.question}</span>
                              </h3>
                              <div className="faq-content">
                                <p>{item.answer}</p>
                              </div>
                              <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                          ))}
                        </div>
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

export default Products
