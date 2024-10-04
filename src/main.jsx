import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Github , {githubinfo} from './Components/Github/Github'
import User from './Components/User/User'


import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//Now, we need to use the Layout.jsx in this main.jsx
//So, we use router 

//Just like kindaa sandwich!
//wrapped things in Layout(Header+Footer)
//To create any sub-router /about/company use <Route></Route> (Wrap things inside this!)
const router=createBrowserRouter(
  createRoutesFromElements(
    //This Route works like just a component, (It takes path,element-->which component is to be loaded in that path)
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route 
      loader={githubinfo}
      path='github'
      element={<Github/>}/>
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}></Route>
      </Route>

      <Route path='*' element={<div>Not Found</div>}/>
    </Route>
  )

  //Put the last in route in the end, so if there is any error, any page-broke it will be captured there! 
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
