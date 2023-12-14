import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// Outlets, omitting the layout because child routes don't share anything, only a path

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="users">
            <Route path=":id" element={<UserDetail />} />
            <Route index element={<UserList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function UserDetail() {
  return (
    <div>
      <h2>User detail</h2>
      <nav>
        <Link to="../">Back</Link>
        <Link to="../1">User 1</Link>
        <Link to="../2">User 2</Link>
      </nav>
    </div>
  );
}

function UserList() {
  return (
    <>
      <h3>User list</h3>
      <nav>
        <Link to="1">User 1</Link>
      </nav>
    </>
  );
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
