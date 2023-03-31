import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import NajjarProjects from './pages/NajjarProjects';
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
            <Route path="NajjarProjects" element={<NajjarProjects />} />
            <Route path="error" element={<Error />} />
          </Route>
          <Route path="/games" element={<HatchGames />} />
        </Routes>
      </BrowserRouter>
    </main>,
  // </React.StrictMode>,
  document.getElementById('root')
);
