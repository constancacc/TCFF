import { useEffect, useState } from "react";
import { getAllStaff } from '../lib/Cosmic.js';

/*slider*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

import '../css/style.css';

function Staff() {
  const [posts, setPosts] = useState([]);

 
  const settings = {
    dots: posts.length > 4, // Mostra os dots apenas se houver mais de 4 elementos na lista
    arrows: true,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    }
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllStaff();
        setPosts(fetchedPosts);
        console.log("Fetched Posts:", fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Slider {...settings} className="slider-container">
      {posts.map((post) => (
        <div className="slider-item">
            <img src={post.metadata.foto.url} className="img-item" alt="TCFF"/>

            <p className="subtexto texto-centro"> {post.title}</p>
            <p className="subtexto texto-centro">{post.metadata.cargo}</p>
         </div>

      ))}
    </Slider>
  );
}

export default Staff;
