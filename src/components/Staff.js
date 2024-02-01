import { useEffect, useState } from "react";
import { getAllStaff } from '../lib/Cosmic.js';

import '../css/style.css';

function Staff() {
  const [posts, setPosts] = useState([]);

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
    <div className="slider-container">
      {posts.map((post) => (
        <div className="slider-item">
            <img src={post.metadata.foto.url} className="img-item" alt="TCFF"/>

            <p className="subtexto texto-centro"> {post.title}</p>
            <p className="subtexto texto-centro">{post.metadata.cargo}</p>
         </div>

      ))}
    </div>
  );
}

export default Staff;
