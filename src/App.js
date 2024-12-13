import './App.css';
import Layout from './layout/Layout';
import LocationPage from '../src/pages/location_page/LocationPage';
import MainPage from '../src/pages/main_page/MainPage';
import ProposPage from '../src/pages/propos_page/ProposPage';
import Error from './pages/error_page/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<MainPage />} />
        <Route path='/location/:id' element={<LocationPage />} />
        <Route path='propos' element={<ProposPage />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
