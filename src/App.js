import Header from './components/Header.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Portfolio from './pages/Portfolio.js'
import Project from './pages/Project.js'
import Theme from './pages/ThemeSelect.js'
import ErrorPage from './pages/ErrorPage.js'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/theme' element={<Theme />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
