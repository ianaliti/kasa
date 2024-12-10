import './App.css';
import Layout from './components/layout/Layout';
import LocationPage from './components/location_page/LocationPage';
import MainPage from './components/main_page/MainPage';
import './styles/main.scss'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<MainPage />} />
        <Route path='/location/:id' element={<LocationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
