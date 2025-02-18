
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedditPosts from "./Components/project";
import PostDetails from "./Components/details";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedditPosts />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
