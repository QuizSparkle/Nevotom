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
      question: 'What is our Inspiration?',
      answer:
        'Our inspiration for this project stems from the recognition of the tremendous potential of affiliate marketing and the desire to create a platform that incentivizes both buyers and sellers. We noticed that affiliate marketers who excel in selling products often earn higher commissions and gain elevated positions within the companies they work for. With this in mind, we envisioned a marketplace that people would love to patronize, where buyers receive governance tokens as compensation for their purchases, and sellers are rewarded for their contributions. By incorporating token rewards and incentives, we aim to create a unique user experience that fosters an engaged community of buyers and sellers.',
    },
    {
      number: '2.',
      question: 'What Nevotom does?',
      answer:
        "Our marketplace revolutionizes the traditional buying and selling experience by integrating NFT/token rewards and incentives. Buyers can browse a wide range of products and make purchases like they would on any e-commerce platform. However, in addition to acquiring the desired product, buyers receive NFTs as rewards for their transactions. These NFTs/tokens hold value and can be collected, traded, or used for various purposes within the platform. On the other hand, sellers are incentivized to list and sell their products in the marketplace through various rewards, fostering a vibrant ecosystem.",
    },
    {
      number: '3.',
      question: 'Accomplishment we are proud of?',
      answer:
        'We are proud to have successfully built a New fully functional marketplace on the blockchain, providing a novel and engaging experience for users. Our platform leverages the power of NFTs and blockchain technology to create an ecosystem where buyers and sellers can benefit from their transactions in unique ways. We have implemented key features such as user registration, product listing, order placement, checkout processes, and transaction processing. Moreover, our focus on security and user experience has resulted in a robust and intuitive platform that we are proud to present.',
    },
    {
      number: '4.',
      question: 'Whats next on nevotom?',
      answer:
        'The future of our project is filled with exciting possibilities. We plan to expand our marketplace by attracting more buyers and sellers, fostering a thriving community. We will continuously enhance the user experience by incorporating user feedback and introducing new features. We aim to integrate additional functionalities, such as auction mechanisms, user ratings and reviews, and social features that encourage interaction among participants. Furthermore, we will explore partnerships and collaborations to expand the range of products available in our marketplace. Additionally, we envision integrating with other blockchain networks to provide more options and reach a wider user base.',
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
