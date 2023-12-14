import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// Before the "bug" fix, no modifications; doesn't work properly

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: false }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard />} />
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
        <Link to="">Dashboard Home (&quot;&quot;)</Link>
        <Link to="team">Team</Link>
        <Link to=".">
          Dashboard home (&quot;A broken link to the Current URL&quot;)
        </Link>
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
      <div>
        <Link to=".">A broken link to the Current URL (not broken)</Link>
      </div>
    </div>
  );
}

export default App;
