
import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Panner from './component/pannar/Panner';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
      <Navbar />
      <Routes />
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
