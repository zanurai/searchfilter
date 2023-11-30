
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [searchFilter, setSearchFilter] = useState("")


  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);

      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response.data)
      setPosts(response.data)
      setLoading(false);

    }
    loadPosts();

  }, [])

  return (
    <div className="App">
      <h1> Search Filter</h1>
      <input type="text" placeholder='search...' onChange={(e) => setSearchFilter(e.target.value)} />
      {loading ? (<h1>loading....</h1>) : (
        posts.filter((value) => {
          if (searchFilter === "") {
            return value;
          } else if (value.title.toLowerCase().includes(searchFilter.toLowerCase())) {
            return value;
          }
        })
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
    </div>
  );
}

export default App;
