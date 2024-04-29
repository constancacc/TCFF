import { useEffect, useState } from "react";
import { getAllPatrocinadores } from '../lib/Cosmic.js';

/*slider*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/style.css';

function Patrocinadores() {
  const [posts, setPosts] = useState([]);

  const settings = {
    dots: posts.length > 4, // Mostra os dots apenas se houver mais de 4 elementos na lista
    arrows: true,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllPatrocinadores();
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
            <img src={post.metadata.logo.url} className="img-item2" alt="TCFF"  style={{border: "2px solid #2E3192", borderRadius: "1.875rem"}}/>
         </div>

      ))}
    </Slider>
  );
}

export default Patrocinadores;
