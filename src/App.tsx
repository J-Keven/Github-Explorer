import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import GlobalStyles from './styles/Global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
