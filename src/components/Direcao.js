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
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 4, // Número de slides visíveis por vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Para telas pequenas, como tablets e celulares
        settings: {
          autoplay: true,
          slidesToShow: 1,  // Apenas 1 slide visível por vez
          slidesToScroll: 1, // Avança 1 por vez
          infinite: true,  // Para o carrossel ser infinito
          dots: true,       // Mostra os dots de navegação
        }
      },
      {
        breakpoint: 1024, // Para telas de tamanho médio (como laptops)
        settings: {
          slidesToShow: 3, // 3 slides por vez em telas médias
          slidesToScroll: 1,
        }
      }
    ]
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
        <div key={post.id} className="slider-item">
          <img src={post.metadata.foto.url} className="img-item" alt="TCFF" />
          <p className="subtexto texto-centro">{post.title}</p>
          <p className="subtexto texto-centro">{post.metadata.cargo}</p>
        </div>
      ))}
    </Slider>
  );
}

export default Direcao;
