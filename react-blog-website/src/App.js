import TopBar from "./components/topbar/TopBar"
import Register from "./pages/register/Register"
import Write from "./pages/write/Write"
import Single from "./pages/single/Single"
import Home from "./pages/Home"
import Login from "./pages/login/Login"
import Settings from "./pages/settings/Settings"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
  const user = true

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
        {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Routes>
    </Router>
  )
}


