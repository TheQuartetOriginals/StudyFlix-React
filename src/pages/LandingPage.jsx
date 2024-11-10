import '../css/landing.css';
import "../css/bootstrap-imports.css"

import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom'; 

function LandingPage() {
  const navigate = useNavigate(); 

  const handleSignIn = () => {
    navigate('/login'); 
  };

  useEffect(() => {
    const emailInput = document.getElementById('email');
    const form = document.querySelector('.email_signup');

    form.addEventListener('submit', (e) => {
      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
        e.preventDefault(); 
        showError('Please enter a valid email address.');
      }
    });

    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(String(email).toLowerCase());
    }

    function showError(message) {
      const errorElement = document.createElement('p');
      errorElement.innerText = message;
      errorElement.classList.add('error-message');
      document.body.appendChild(errorElement);
    }

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const accordionItems = document.querySelectorAll('.accordion li');

    accordionItems.forEach(item => {
      item.addEventListener('click', () => {
        accordionItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScrollAnimation() {
      const elements = document.querySelectorAll('.hidden-on-start');

      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('scroll-in');
        }
      });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    document.addEventListener('DOMContentLoaded', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      document.removeEventListener('DOMContentLoaded', handleScrollAnimation);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <img src="https://i.ibb.co/TLFxkhM/logo.webp" alt="logo" className="logo" />
          <div>
            {/* On button click, navigate to the login page */}
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </nav>

        <div className="header-content">
          <h1>Unlimited study materials, video lectures and more.</h1>
          <h3>Learn anywhere, anytime.</h3>
          <p>
            Ready to start learning? Enter your email to create or access your StudyFlix account.
          </p>

          <form className="email_signup">
            <div className="input-container">
              <input type="email" className="email_input" id="email" placeholder="" required />
              <label htmlFor="email" className="email_label">Email Address</label>
            </div>
            <button type="submit" className="signup_button">Get Started</button>
          </form>
        </div>
      </header>

      <main>
        <section>
          <div className="features">
            <div className="row hidden-on-start">
              <div className="text-col">
                <h2>Learn on your devices</h2>
                <p>
                  Access study materials on smart TVs, tablets, laptops, smartphones, and more.
                </p>
              </div>
              <div className="img-col">
                <img
                  src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="feature-photo-1"
                />
              </div>
            </div>

             

            <div className="row hidden-on-start">
              <div className="img-col">
                <img
                    src="https://media.istockphoto.com/id/2058409244/photo/document-audit-inspection-and-business-asset-analysis-concept-man-inspects-data-file-check.webp?b=1&s=612x612&w=0&k=20&c=y2USo8eJ0XdNVwoPyrzC8aV3pcoiE_dYzMYi_7Z10gM="
                    alt="feature-photo-2"
                />
              </div>
              <div className="text-col">
                <h2>Just a click Away.</h2>
                <p>
                  Access study materials anytime with just a click.
                </p>
              </div>
            </div>

             

            <div className="row hidden-on-start">
              <div className="text-col">
                <h2>Learn anywhere, anytime.</h2>
                <p>
                  Access unlimited study materials on your phone, tablet, laptop, and TV.
                </p>
              </div>
              <div className="img-col">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661517629428-1adac40f175c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="feature-photo-3"
                />
              </div>
            </div>

             

            <div className="row hidden-on-start">
              <div className="img-col">
                <img
                  src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="feature-photo-4"
                />
              </div>
              <div className="text-col">
                <h2>Create notes while you study</h2>
                <p>
                  Add notes while watching a lecture.
                </p>
              </div>
            </div>
          </div>
        </section>

         

        <section>
          <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <ul className="accordion">
              <li>
                <input type="radio" name="accordion" id="first" />
                <label htmlFor="first" className="label2">What is StudyFlix?</label>
                <div className="content">
                  <p>
                    StudyFlix is a platform designed to provide study materials and educational videos on a variety of subjects. It aims to offer flexible and accessible learning resources, allowing users to access content on different devices, personalize their learning experience, and utilize features like note-taking and offline access.
                  </p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second" className="label2">How much does studyflix cost?</label>
                <div className="content">
                  <p>StudyFlix is free to use—enjoy all your study materials and educational videos at no cost.</p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordion" id="third" />
                <label htmlFor="third" className="label2">Where can I watch?</label>
                <div className="content">
                  <p>Watch anywhere, anytime. Sign in to StudyFlix and instantly access your study materials on any device—whether it’s a computer, smart TV, smartphone, tablet, or streaming player.</p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordion" id="fourth" />
                <label htmlFor="fourth" className="label2">Can I use StudyFlix offline?</label>
                <div className="content">
                  <p>Currently, StudyFlix requires an internet connection to access its content. However, you can enjoy learning anytime and anywhere while connected.</p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordion" id="fifth" />
                <label htmlFor="fifth" className="label2">What devices can I use to access StudyFlix?</label>
                <div className="content">
                  <p>You can watch StudyFlix on any internet-connected device, including smart TVs, computers, smartphones, tablets, and streaming media players.</p>
                </div>
              </li>
            </ul>
            <small>Ready to start learning? Enter your email to create or access your StudyFlix account.</small>
            <form className="email_signup">
              <div className="input-container">
                <input type="email" className="email_input" id="email" placeholder="" required />
                <label htmlFor="email" className="email_label">Email Address</label>
              </div>
              <button type="submit" className="signup_button">Get Started</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p className="copyright-text">© StudyFlix India</p>
      </footer>
    </>
  );
}

export default LandingPage;
