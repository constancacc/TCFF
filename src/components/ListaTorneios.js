import { useEffect, useState } from "react";
import { getAllTorneios } from '../lib/Cosmic.js';

import '../css/style.css';

function ListaTorneios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllTorneios();
        setPosts(fetchedPosts);
        console.log("Fetched Posts:", fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="col-lg-10 bluecontainer" style={{ position: "relative", border: "1px solid white" }}>
          <h1 className="subtitulo white">{post.title}</h1>
          <h3 className="subtexto white"><i>{post.metadata.data_inicio} a {post.metadata.data_fim}</i></h3>
          <p className="subtexto white desktop">
            {post.metadata.descricao}
          </p>

          {/* Verifica se o link_oficial existe e é uma string válida */}
          {post.metadata.link_oficial && post.metadata.link_oficial.trim().length > 0 && (
            <a className="subtexto mais_info" href={post.metadata.link_oficial}>
              mais informações
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListaTorneios;
