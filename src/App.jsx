import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';

// Importiamo le pagine
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import ContactsPage from './pages/ContactsPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import PostDetailPage from './pages/PostDetailPage';
import NewPostPage from './pages/NewPostPage';

// importiamo il post context
import { PostProvider } from './contexts/PostContext';


function App() {
  return (
    // aggiungiamo il post provide
    <PostProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path='/posts'>
            <Route index element={<PostsPage />} />
            <Route path=":id" element={<PostDetailPage />} />
            <Route path="newpost" element={<NewPostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;