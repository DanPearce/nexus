import styles from './styles/App.module.css'
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import PostHome from './pages/posts/PostHome';
import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
import Profile from './pages/profiles/Profile';
import PostSearch from './pages/posts/PostSearch';
import './api/axiosDefaults'
import PostCreateForm from './pages/posts/PostCreateForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Body}>
        <Routes>
          <Route exact path='/' element={<PostHome />}/>
          <Route exact path='/signin' element={<SignInForm />}/>
          <Route exact path='/signup' element={<SignUpForm />}/>
          <Route exact path='/discover' element={<PostSearch />}/>
          <Route exact path='/profile' element={<Profile />}/>
          <Route exact path='/posts/create' element={<PostCreateForm />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
