import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Values from './Components/Values/values';
import ContactInfo from './Components/Contacto/ContactInfo';

function App() {
  return (
    <div className="main-bg">
        <Header/>
        <Values/>
        <ContactInfo/>
        <footer>
          <a href="https://www.instagram.com/reymond_j.a/"> Desarrollado por Retro &copy; 2025 |</a>
        </footer>
    </div>
  );
}

export default App;
