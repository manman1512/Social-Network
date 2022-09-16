import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home/home.jsx';
import Single from './components/Single/single.jsx';
import Write from './components/Write/write.jsx';
import Setting from './components/Setting/setting.jsx'

function App() {
  // const user = false;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={<Write />} />
          <Route path="/setting" element={<Setting />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
