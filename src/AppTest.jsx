import { Link, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// With Layout and Outlets, no splat routes

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="team" element={<DashboardTeam />} />
            <Route index element={<DashboardHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="">Dashboard Home (../)</Link>
        <Link to="team">Team (../team)</Link>
        {/* useless here: */}
        <Link to=".">Current (.)</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function DashboardHome() {
  return <h3>Dashboard Home</h3>;
}

function DashboardTeam() {
  return (
    <div>
      <h3>Team</h3>
      <nav>
        <Link to=".">Current (.)</Link>
        <Link to="..">Sibling (..)</Link>
      </nav>
    </div>
  );
}

export default App;
