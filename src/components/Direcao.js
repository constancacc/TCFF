import { useEffect, useState } from "react";
import { getAllDirecao } from '../lib/Cosmic.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/style.css';

function Direcao() {
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
        const fetchedPosts = await getAllDirecao();
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
        <div key={post.id} className="slider-item" style={{ width: "13.125rem" }}>
          <img src={post.metadata.foto.url} className="img-item" alt="TCFF" />
          <p className="subtexto texto-centro">{post.title}</p>
          <p className="subtexto texto-centro">{post.metadata.cargo}</p>
        </div>
      ))}
    </Slider>
  );
}

export default Direcao;
