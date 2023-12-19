import "@hotwired/turbo-rails";
import "./controllers";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import UpdatedGreetingComponent from './components/greetings.jsx'; // Update import

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UpdatedGreetingComponent />} /> {/* Update component name */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
