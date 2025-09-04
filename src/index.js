import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Reviews from './Reviews';
import OrderSection from './OrderSection';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Nav/>
 <Header/>
 <Main/>
 <Reviews/>
 <OrderSection/>
 <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
