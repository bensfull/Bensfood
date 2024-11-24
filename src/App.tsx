import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { store } from './components/store';
import Cart from './components/Cart/inde';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Cart/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
