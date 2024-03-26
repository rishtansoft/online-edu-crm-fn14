import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom'

// THIS FUNCTION FOR PROTECTED ROUTE
function ProtectedRoute({children, redirectTo = '/login', isAuthenticated}) {
  const navigate = useNavigate();

  if (!isAuthenticated) {
   return navigate(redirectTo)
  }

  return children;
}

//PUBLIC PAGES 
function Marketing() {
  return (
    <h1>Marketing</h1>
  )
}
function Login() {
  return (
    <h1>Login</h1>
  )
}

// LAYOUT
function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        Navbar
      </aside>
      <main className='main'>
        <header>Header</header>
        <div>
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  )
}


// ADMINSTRATOR
function HomePage() {
  return (
    <h1>HomePage</h1>
  )
}
function AllGroup() {
  return (
    <h1>AllGroup</h1>
  )
}
function Directions() {
  return (
    <h1>Directions</h1>
  )
}

// TEACHER 
function Groups() {
  return (
    <h1>Groups</h1>
  )
}

// PUPIL 
function PrimaryPage() {
  return (
    <h1>PrimaryPage</h1>
  )
}
function MyGroups() {
  return (
    <h1>MyGroups</h1>
  )
}
function Settings() {
  return (
    <h1>Settings</h1>
  )
}


function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('PUPIL');

  useEffect(() => {    
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    } else {
      setToken(false)
    }
  }, [])

  return (
    <>
      <Routes>
        {/* Public Routes  */}
        <Route path="/marketing" element={<Marketing/>}></Route>
        <Route path="/login" element={<Login setRole={setRole} setToken={setToken}/>}></Route>

        {/* Protected Routes */}

        {
          // ADMINISTRATOR
         role == 'ADMIN' && 
         <Route element={<Layout/>}>
          <Route path="/" element = {
              <ProtectedRoute isAuthenticated={token ? true : false}>
                  <HomePage></HomePage>
              </ProtectedRoute>
            }></Route>
          <Route path="/allgroup" element = {
              <ProtectedRoute isAuthenticated={token ? true : false}>
                  <AllGroup></AllGroup>
              </ProtectedRoute>
            }></Route>
          <Route path="/directions" element = {
              <ProtectedRoute isAuthenticated={token ? true : false}>
                  <Directions></Directions>
              </ProtectedRoute>
            }></Route>
         </Route>
         ||
        //  TEACHER 
         role == 'TEACHER' && 
         <Route element={<Layout/>}>
          <Route path="/" element = {
              <ProtectedRoute isAuthenticated={token ? true : false}>
                  <Groups></Groups>
              </ProtectedRoute>
            }></Route>
         </Route>
         ||
        //  PUPIL 
         role == 'PUPIL' && 
         <Route element={<Layout/>}>
          <Route path="/" element = {
              <ProtectedRoute isAuthenticated={token ? true : false}>
                  <PrimaryPage></PrimaryPage>
              </ProtectedRoute>
            }></Route>
          <Route path="/allgroup" element = {
              <ProtectedRoute isAuthenticated={token ? true : false}>
                  <MyGroups></MyGroups>
              </ProtectedRoute>
            }></Route>
          <Route path="/settings" element = {
              <ProtectedRoute isAuthenticated={token ? true : false}>
                  <Settings></Settings>
              </ProtectedRoute>
            }></Route>
         </Route>
        }

      </Routes>
    </>
  )
}

export default App
