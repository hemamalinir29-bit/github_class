import Counter from "./Counter";
import { Add, Subtract, Multiply, Divide } from "./Math";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/add " element={<Add />} />
        <Route path="/Subtract " element={<Subtract />} />
        <Route path="/Multiply" element={<Multiply />} />
        <Route path="/Divide" element={<Divide />} />
      </Routes>
    </>
  );
}
export {Add,Subtract,Multiply,Divide}
export default App;
