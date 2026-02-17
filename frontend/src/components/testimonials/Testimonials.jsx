import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import './testimonial_support.css';
import { useData } from '../../apidata';

const sanitizeText = (html) => {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

const Testimonials = () => {
  const { data, loading } = useData();

  useEffect(() => {
    const calculateMaxHeight = () => {
      const testimonialCards = document.querySelectorAll('.testimonial__card');
      let maxHeight = 0;
      testimonialCards.forEach(card => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
      testimonialCards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    };

    if (!loading) {
      calculateMaxHeight();
      window.addEventListener('resize', calculateMaxHeight);
    }

    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [loading, data.testimonial_data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const testimonials = data.testimonial_data || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial container section" id="certifications">
      <h2 className="section__title">Certifications and Badges</h2>
      <span className="section__subtitle"></span>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial__card" key={index}>
            <div className="testimonial__content">
              <div className="testimonial__img-container">
                <img className="testimonial__img" src={testimonial.certificate_icon_pic} alt={testimonial.title} />
              </div>
              <div className="testimonial__text">
                <h3 className="testimonial__title">{testimonial.title}</h3>
              </div>
            </div>
            <div className="new_div">
              <p className="testimonial__date">Date Completed: {testimonial.date_completed}</p>
              <div className="skill_tag">
                <p>Skills:</p>
              </div>
              <p className="testimonial__skills">{sanitizeText(testimonial.skills)}</p>
            </div>
            <div className="testimonial__link-container">
              <a href={testimonial.certification_link} className="testimonial__link" target="_blank" rel="noopener noreferrer">View Certification</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
