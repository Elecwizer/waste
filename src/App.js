import './App.css';
//compoentn import
import FullSearch from './components/FullSearch.jsx';
import Navbar from './components/Navbar.jsx';
import SmartBinsMap from './components/SmartBinsMap.jsx';
import SmartBins from './components/SmartBins.jsx';
//end component import

function App() {
  return (
    <>
      <Navbar/>
      <SmartBinsMap/>
      <FullSearch/>
      <SmartBins/>
    </>
  ); 
}

export default App;
