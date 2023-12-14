import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// After the "bug" fix; with some modifications so we can keep the
// previous "splat route" usage

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="dashboard/*">
            <Route indexx path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="..">Dashboard Home (../)</Link>
        <Link to="../team">Team (../team)</Link>
        {/* useless here: */}
        <Link to=".">Current (.)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="team" element={<DashboardTeam />} />
      </Routes>
    </div>
  );
}

function DashboardHome() {
  return <h3>Dashboard home</h3>;
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
