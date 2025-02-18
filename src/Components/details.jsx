import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./details.css";

const PostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    return <p className="text-center text-danger">No post data available.</p>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          🏠 Home
        </button>
      </div>

      <div className="card post-details-card">
        {post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default' ? (
          <img src={post.thumbnail} alt={post.title} className="card-img-top post-thumbnail" />
        ) : null}
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p className="post-meta">
            <strong>Author:</strong> {post.author} | <strong>Subreddit:</strong> {post.subreddit_name_prefixed} | <strong>Upvotes:</strong> {post.ups}
          </p>
          <p><strong>Comments:</strong> {post.num_comments}</p>
          {post.selftext && <p><strong>Content:</strong> {post.selftext}</p>}
          <p><strong>Created at:</strong> {new Date(post.created_utc * 1000).toLocaleString()}</p>
          <p><strong>Post ID:</strong> {post.id}</p>
          <p><strong>Link Flair:</strong> {post.link_flair_text || 'N/A'}</p>
          <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View on Reddit
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
