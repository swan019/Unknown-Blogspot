import { useContext, useEffect } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Header from './Components/Header'
import Paging from './Components/Paging'
import { AppContext } from './Context/AppContext'

function App() {

  const { fetchBlogsPost } = useContext(AppContext);
  useEffect(() => {
    fetchBlogsPost();
  }, [])

  return (
    <div className='flex flex-col w-full justify-center content-center '>
      <Header />
      <Blogs />
      <Paging />
    </div>
  )
}

export default App
