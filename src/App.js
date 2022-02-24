import "./App.css";
// import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      {/* <Button variant="contained">Hello world</Button> */}
    </div>
  );
}

export default App;
