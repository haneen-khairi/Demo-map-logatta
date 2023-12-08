// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './ui/shared/Layout';

export default function App() {
    let routes = createHashRouter([
        {path:'/' , element: <Layout /> , children:[
            {index:true, element:<Home/>},
        ]}
    ])
    return<>
      
      <RouterProvider router={routes} />
    </> 
  }
  

