
import { Route, Routes } from 'react-router-dom'
import './App.scss';
import Header from './components/Header'
import Landing from './components/Landing'
import Services from './components/Services'
function App() {
  return (
    <div className="App">
         <Header />
        <Routes>
        <Route path="/" element={ <Landing />}/>
        <Route path="/services" element={<Services />}/>
        </Routes>
       
       
    </div>
  );
}

export default App;
