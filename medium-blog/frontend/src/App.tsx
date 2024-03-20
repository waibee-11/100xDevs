import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import Publish from './pages/Publish'
import Edit from './pages/Edit'
import Profile from './pages/Profile'
import UpdateProfile from './pages/UpdateProfile'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/profile/update" element={<UpdateProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
