import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./project.css";

const RedditPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://www.reddit.com/r/reactjs.json";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setPosts(response.data.data.children);
      } catch (error) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container d-flex justify-content-center align-items-center">
                       <a className="navbar-brand text-dark" href="/"><h1>Anwesh Project</h1></a>
                   </div>
      </nav>

      <div className="container mt-4">
        <h2 className="text-center mb-4">Posts</h2>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="row">
          {posts.map((post) => (
            <div key={post.data.id} className="col-md-4">
         <div className="card post-box">
             {post.data.thumbnail&&post.data.thumbnail !== 'self' && post.data.thumbnail !== 'default' ? (
                  <img src={post.data.thumbnail} alt={post.data.title} className="card-img-top post-thumbnail" />
                ) : null}
                <div className="card-body">
                  <h5 className="card-title">{post.data.title}</h5>
                  <p className="card-text">By: {post.data.author}</p>
                  <p className="card-text">Subreddit: {post.data.subreddit_name_prefixed}</p>
                  <p className="card-text">Upvotes: {post.data.ups}</p>
                  <p className="card-text">Comments: {post.data.num_comments}</p>

                  <p className="card-text">{post.data.selftext ? post.data.selftext.slice(0, 150)+"...":"No content available."}</p>
                  <Link to={`/post/${post.data.id}`} state={{ post: post.data }} className="btn btn-primary">
                    View Post
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer bg-dark text-white text-center py-3 mt-4">
      <p className="mb-0">
   Anwesh Kumar Nayak | PH=8917355417 | Email=
  <a href="mailto:anweshnayak111@gmail.com">anweshnayak111@gmail.com</a>
</p>
      </footer>
    </>
  );
};

export default RedditPosts;
