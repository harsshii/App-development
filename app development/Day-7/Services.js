import React from 'react';
import './Services.css'; // Import the CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeaderComponent from './HeaderComponent';
import Slider from 'react-slick';


const Services = () => {
  const services = [
    {
      title: 'Haircut',
      description: 'Our experienced stylists will provide you with a stylish haircut that suits your personality and preferences.',
      image: 'https://www.hairstylery.com/wp-content/uploads/medium-layered-hair/9-BmR5rXKBSJ1.jpg' // Replace with actual image
    },
    {
      title: 'Hair Coloring for Women',
      description: 'Transform your look with our professional hair coloring services. Choose from a wide range of colors and styles.',
      image: 'https://www.hairdohairstyle.com/wp-content/uploads/2018/05/1-Dusty-Lavender.jpg' // Replace with actual image
    },
    {
      title: 'Hair Coloring for Men',
      description: 'Transform your look with our professional hair coloring services. Choose from a wide range of colors and styles.',
      image: 'https://i.pinimg.com/originals/80/21/21/802121378b42c39d6a5682f4e1ce0c2b.png' // Replace with actual image
    },
    {
      title: 'Bridal Makeup',
      description: 'Get a stunning Bridal Makeup for a wedding. Our experts will style you to perfection.',
      image: 'https://media.weddingz.in/images/a939d16a0c11b428ef6034d217e76f0b/10-stunning-bridal-makeup-looks-for-the-2018-bride-10.jpg' // Replace with actual image
    },
    {
        title: 'Hair Styling',
        description: 'Get a stunning hairstyle for any occasion - be it a party, wedding, or casual day out. Our experts will style your hair to perfection.',
        image: 'https://cdn.fash.com/assets/images/content/hair-stylist-1.jpg' // Replace with actual image
      },
    {
        title: 'Hair Treatment',
        description: 'Revitalize your hair with our rejuvenating hair treatments. Our treatments nourish and strengthen your hair, leaving it healthy and shiny.',
        image: 'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2018/07/scalp-treatment.jpg?resize=1024%2C1024&ssl=1' // Replace with actual image
      }
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>

    <HeaderComponent/>
    <div className="services-container">
      <h2>Our Services</h2>
      <Slider {...sliderSettings}>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Services;
