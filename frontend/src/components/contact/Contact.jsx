import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useData } from "../../apidata";
import "./contact.css";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/portfolio';

const Contact = () => {
  const form = useRef();
  const { data } = useData();
  const contactData = data.profile_data;
  const [errors, setErrors] = useState({});

  const validate = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    if (!formData.get('name')?.trim()) newErrors.name = 'Name is required';
    if (!formData.get('email')?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) newErrors.email = 'Email is invalid';
    if (!formData.get('message')?.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData(form.current);
    const jsonBody = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    fetch(`${API_URL}/profiles/1/feedbacks/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonBody),
    })
      .then(response => response.json())
      .then(() => {
        toast.success('Feedback sent successfully!', { position: 'top-right' });
        form.current.reset();
        setErrors({});
      })
      .catch(error => {
        console.error('Error sending feedback:', error);
        toast.error('Failed to send feedback. Please try again later.', { position: 'top-right' });
      });
  };

  return (
    <section className="contact section" id="contact">
      <ToastContainer />
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {contactData && (
              <>
                <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon"></i>
                  <h3 className="contact__card-title">Email</h3>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="contact__button"
                  >
                    Write me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>

                <div className="contact__card">
                  <i className="bx bxl-linkedin contact__card-icon"></i>
                  <h3 className="contact__card-title">LinkedIn</h3>
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__button"
                  >
                    Write me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>

                <div className="contact__card">
                  <i className="bx bxl-github contact__card-icon"></i>
                  <h3 className="contact__card-title">GitHub</h3>
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__button"
                  >
                    Follow me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your Question or Feedback</h3>

          <form ref={form} onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
              {errors.name && <span className="contact__form-error">{errors.name}</span>}
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
              {errors.email && <span className="contact__form-error">{errors.email}</span>}
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Question/Feedback</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your Question"
                required
              ></textarea>
              {errors.message && <span className="contact__form-error">{errors.message}</span>}
            </div>

            <button className="button button--flex">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.82525 19.5899 5.19525C18.9599 4.56525 18.1599 4.65525 16.6199 5.16525L8.12988 7.99525C7.90988 8.06525 7.72988 7.88525 7.63988 7.66525V7.33525Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
