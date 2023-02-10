import React from 'react';
import { useRoutes } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';
import MyAccount from './pages/MyAccount';

export default () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre', element: <About />},
    { path: '*', element: <NotFound />},
    { path: '/signin', element: <SignIn />},
    { path: '/signup', element: <SignUp />},
    { path: '/ad/:id', element: <AdPage />},
    { path: '/post-an-ad', element: <RouteHandler><AddAd /></RouteHandler>},
    { path: '/ads', element: <Ads />},
    { path: '/my-account', element: <MyAccount />},
  ])
  // return (
  //   <Routes>
  //     <RouteHandler exact path="/">
  //       <Home />
  //     </RouteHandler>
  //     <RouteHandler exact path="/about">
  //       <About />
  //     </RouteHandler>
  //     <RouteHandler exact path="/signin">
  //       <SignIn />
  //     </RouteHandler>
  //     <RouteHandler exact path="/signup">
  //       <SignUp />
  //     </RouteHandler>
  //     <RouteHandler exact path="/ad/:id">
  //       <AdPage />
  //     </RouteHandler>
  //     <RouteHandler exact path="/">
  //       <NotFound />
  //     </RouteHandler>
  //   </Routes>
  // );
}