import './App.css';
//compoentn import
import FullSearch from './components/FullSearch.jsx';
import Navbar from './components/Navbar.jsx';
import SmartBinsMap from './components/SmartBinsMap.jsx';
//end component import

function App() {
  return (
    <>
      <Navbar/>
      <SmartBinsMap/>
      <FullSearch/>
    </>
  );
}

export default App;
