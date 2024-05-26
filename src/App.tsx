import Navbar from "./components/shared/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="w-[95%] max-w-[1720px] bg-white mx-auto">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
