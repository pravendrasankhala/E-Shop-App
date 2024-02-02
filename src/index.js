import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home/Home.jsx'
import Cards from './Pages/Cards/Card.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './App/Store.js';


const router = createBrowserRouter([
  {
    path:"/", element:<App/>,
    children:[
      {path:'' ,element:<Home/>},
      {path: "Cards" , element:<Cards/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);


