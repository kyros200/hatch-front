import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import Entries from './pages/Entries';
import Error from './pages/Error';
import HatchGames from './pages/HatchGames';
import PageLayout from './layouts/PageLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './main.scss'

ReactDOM.render(
  // <React.StrictMode>
    <main>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Landing />} />
            <Route path="entries" element={<Entries />} />
            <Route path="error" element={<Error />} />
            <Route path="me" element={<>About Me</>} />
            <Route path="about" element={<>About Hatch</>} />
          </Route>
          <Route path="/games" element={<HatchGames />} />
        </Routes>
      </BrowserRouter>
    </main>,
  // </React.StrictMode>,
  document.getElementById('root')
);
