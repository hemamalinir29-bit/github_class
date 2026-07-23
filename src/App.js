import Counter from "./Counter";
import { Add, Subtract, Multiply, Divide } from "./Math";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/add" element={<Add />} />
        <Route path="/subtract" element={<Subtract />} />
        <Route path="/multiply" element={<Multiply />} />
        <Route path="/divide" element={<Divide />} />
      </Routes>
    </>
  );
}

export default App;
