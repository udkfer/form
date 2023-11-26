import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { getPosts } from "../../api/postsService";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  if (posts.length === 0) {
    return (
      <div className={styles.loading}>
        <span>Nothing here...</span>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {posts.length > 0 && posts.map((post) => <PostCard post={post} />)}
    </div>
  );
}

export default Posts;
