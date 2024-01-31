import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step 1
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogsPost(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json(); // Await the JSON data
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Network error:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(newPage) {
    setPage(newPage);
    fetchBlogsPost(newPage);
  }

  const value = {
    posts,
    setPosts,
    page,
    setPage,
    loading,
    setLoading,
    totalPages,
    setTotalPages,
    fetchBlogsPost,
    handlePageChange,
  };

  // Step 2
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
