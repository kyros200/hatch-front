import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import Entries from './components/Entries';
import Error from './components/Error';
import PageLayout from './components/PageLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './main.scss'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
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
        </Routes> 
      </BrowserRouter>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
