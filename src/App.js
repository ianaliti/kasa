import './App.css';
import Layout from './components/layout/Layout';
import LocationPage from './components/location_page/LocationPage';
import './styles/main.scss'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path='/location/:id' element={<LocationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
