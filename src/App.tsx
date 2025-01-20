import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/home-page';
import NotFound from './page/notfound-page';

const App = () => {
  return (
    <BrowserRouter basename="/profile-web-page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
