import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Routes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}
//   API https://street-bites-api.onrender.com/menu
export default App;
