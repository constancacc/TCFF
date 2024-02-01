import { useEffect, useState } from "react";
import { getAllPatrocinadores } from '../lib/Cosmic.js';

import '../css/style.css';

function Patrocinadores() {
  const [posts, setPosts] = useState([]);

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
    <div className="slider-container">
      {posts.map((post) => (
        <div className="slider-item">
            <img src={post.metadata.logo.url} className="img-item2" alt="TCFF"/>
         </div>

      ))}
    </div>
  );
}

export default Patrocinadores;
