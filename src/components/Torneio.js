import { useEffect, useState } from "react";
import { getAllTorneios } from '../lib/Cosmic.js';

function Torneio() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllTorneios();
       //ir buscar as galerias que estão em destaque
       const torneioAtivo = fetchedPosts.filter(post => post.metadata.ativo === true);

       const primeiroPostAtivo = torneioAtivo.slice(0, 1);
       setPosts(primeiroPostAtivo);
       
       console.log("Destaques Posts:", primeiroPostAtivo);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{position: "relative"}}>
      {posts.map((post) => (
        <div className="col-lg-10 bluecontainer" style={{ position: "relative", border: "1px solid white" }}>
          <h1 className="subtitulo white">{post.title}</h1>
          <h3 className="subtexto white" style={{ marginTop: "10vh" }}><i>{post.metadata.data_inicio} a {post.metadata.data_fim}</i></h3>
          <p className="subtexto white" style={{ width: "40vw" }}>
           {post.metadata.descricao}
          </p>
          <a className="subtexto mais_info" href={post.metadata.link_oficial}>
            mais informações
          </a>
        </div>
      ))}
    </div>
  );
}

export default Torneio;
