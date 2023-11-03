import { createBrowserRouter, RouterProvider, Outlet , BrowserRouter as Router  } from 'react-router-dom';
import './App.css'
import Graphic from './components/graphic/graphic';
import Branding from './components/branding/branding';
import Animation from './components/2d/Animation';
import Video from './components/Video/Video';
import Product from './components/Product/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Motion from './components/Motion/motion';
import Technical from './components/technical/technical'
import Remote from './components/Remote/remote';
import Uiux from './components/Uiux/uiux';
import Career from './components/Career/career';
import Graphic2 from './pages/Graphic-career/graphic'
import Animation2 from './pages/AnimationPage/animation';
import WebDevelopment from './pages/web developer/web'
import DigitalPage from './pages/DigitalPage/digital'
import SystemPage from './pages/SystemPage/system'
import MarketingPage from './pages/MarketingPage/marketing'
import Videoconferencing from './components/VideoConferencing/videoconferencing';


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
        path:'/product',
        element: <Product/>
      },
      {
        path:'/technical',
        element: <Technical/>
      },
      {
        path:'/remote',
        element: <Remote/>
      },
      {
        path:'/uiux',
        element: <Uiux/>
      },
      {
        path:'/career',
        element: <Career/>
      },
      {
        path:'/graphic2',
        element: <Graphic2/>
      },
      {
        path:'/animation2',
        element: <Animation2/>
      },
      {
        path:'/webdevelopment',
        element: <WebDevelopment/>
      },
      {
        path:'/digitalpage',
        element: <DigitalPage/>
      },
      {
        path:'/systempage',
        element: <SystemPage/>
      },
      {
        path:'/marketingpage',
        element: < MarketingPage/>
      },
      {
        path:'/videoconferencing',
        element: < Videoconferencing/>
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
