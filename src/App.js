import './styles/index.scss';
import Header from './components/Header.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Portfolio from './pages/Portfolio.js'
import Project from './pages/Project.js'
import Theme from './pages/ThemeSelect.js'
import AdminLogin from './pages/AdminLogin.js'
import AdminNewProject from './pages/AdminNewProject.js'
import ErrorPage from './pages/ErrorPage.js'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store.js';

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/project' element={<Project />}/>
            <Route path='/theme' element={<Theme />}/>
            <Route path='/login' element={<AdminLogin />}/>
            <Route path='/add-project' element={<AdminNewProject />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
