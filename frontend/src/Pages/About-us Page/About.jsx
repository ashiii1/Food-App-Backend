import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./About.css"

// About-Us Page

const About = () => {
    const ArrowButton = ({ direction, onClick }) => (
      <button
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '40%',
          width:"40px",
          fontWeight:"700",
          transform: 'translateY(-50%)',
          zIndex: 1,
          cursor: 'pointer',
        //   backgroundColor: 'transparent',
          border: 'none',
          fontSize: '24px',
          color: '#333',
          backgroundColor:"#ffd12e",
          borderRadius:"30px",
          ...(direction === 'prev' ? { left: 0 } : { right: 0 }),
        }}
      >
        {direction === 'prev' ? '<' : '>'}
      </button>
    )
    const images = [
        "https://www.free-power-point-templates.com/wp-content/uploads/2020/09/30147-restaurant-presentation-1-2-about-us.jpg",
        "https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.webp?b=1&s=170667a&w=0&k=20&c=CPnBJAsLv6e8ZE1DP_z0zP1uRk2adI-aeQQuPSsK8QU=",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
        "https://plus.unsplash.com/premium_photo-1673830185613-fba8baacca0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
        "https://www.free-power-point-templates.com/wp-content/uploads/2020/09/30147-restaurant-presentation-1-5-ranking-chef.jpg",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        
        // Add more image URLs here
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Set slide transition speed to 2 seconds (2000 milliseconds)
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay interval to 2 seconds (2000 milliseconds)
        prevArrow: <ArrowButton direction="prev" />, // Custom previous arrow button
        nextArrow: <ArrowButton direction="next" />, 
      };
      return (
        <div className="container">
        <Slider {...settings} style={{margin:"auto", width:"70%",marginTop:"10px" }} >
          {images.map((image, index) => (
            <div key={index}>
              <img style={{width:"100%",height:"450px"}} src={image} alt={`Imag ${index + 1}`} />

              <div style={{margin:"auto",backgroundColor:"#010f29", width:"100%", padding:"15px"}}><p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores sapiente suscipit dolorum dignissimos modi cum eveniet harum officiis debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et adipisci excepturi aspernatur sit itaque non id impedit consectetur voluptatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda obcaecati ratione ea. Dignissimos doloremque harum quae sed odio atque mollitia facilis consequuntur alias. Ducimus placeat totam provident quia, est autem!</p></div>
            </div>
          ))}
        </Slider>
        </div>
      );
    };

export default About