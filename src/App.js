import './App.css';
import Layout from './components/layout/Layout';
import LocationPage from './components/pages/location_page/LocationPage';
import MainPage from './components/pages/main_page/MainPage';
import ProposPage from './components/pages/propos_page/ProposPage';
import Error from './components/error/Error';
import './styles/main.scss'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/kasa/" element={<Layout />} >
        <Route />
        <Route index element={<MainPage />} />
        <Route path='/location/:id' element={<LocationPage />} />
        <Route path='propos' element={<ProposPage />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
