import { createBrowserRouter, RouterProvider, Outlet , BrowserRouter as Router  } from 'react-router-dom';
import './App.css'
import Graphic from './components/graphic/graphic';
import Branding from './components/branding/branding';
import Animation from './components/2d/Animation';
import Video from './components/Video/Video';
import Product from './components/Product/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Motion from './components/Motion/motion';

const Layout = () =>{
  return(
  <>
  
  
  <Outlet/>
  
  </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/graphic',
        element: <Graphic/>
      },
      {
        path:'/branding',
        element: <Branding/>
      },
      {
        path:'/animation',
        element: <Animation/>
      },
      {
        path:'/video',
        element: <Video/>
      },
     
      {
        path:'/motion',
        element: <Motion/>
      },
      {
        path:'/graphic',
        element: <Graphic/>
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">

<RouterProvider router={router} />

    {/* <BrowserRouter>
    <Routes>
          <Route index element={Graphic  } />
          <Route path="/Branding" element={<Branding/>} />
          <Route path="/Animation" element={<Animation/>} />
          <Route path="/Video" element={<Video/>} />
          <Route path="/Motion" element={<Motion/>} />
          <Route path="/Motion" element={<Motion/>} />
    </Routes>
    </BrowserRouter> */}

    

  {/* <Graphic /> */}
    {/* <Branding/> */}
    {/* <Animation/> */}
    {/* <Video/> */}
    {/* <Motion/> */}
    {/* <Motion/> */}
   

    </div>
  );
}

export default App;
