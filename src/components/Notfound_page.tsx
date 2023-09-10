import React from 'react';
import Notfound from '../assets/img/not-found.svg'

const Notfound_page = () => {
  return (
    <div className="container">
      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <a className="btn" href="/">
          Back to home
        </a>
        <img
          src={Notfound}
          className="img-fluid py-5"
          alt="Page Not Found"
        />
      </section>
    </div>
  );
};

export default Notfound_page;
