import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Favorite from './components/Favorite';

const App = () => {
  return (
    <>
      <Header />
      <Profile />
      <Favorite />
      <Footer />
    </>
  )
}

export default App;
