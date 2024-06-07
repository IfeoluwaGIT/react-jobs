import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(

<Route path='/' element={<MainLayout />} >
  <Route index element={<HomePage /> }/>
  <Route path='/jobs' element={<JobsPage /> }/>
  <Route path='*' element={<NotFoundPage /> }/>
</Route>

));

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App



