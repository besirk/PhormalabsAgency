import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  return (
    <div className="App">
      <div style={{ background: "#ebf5ff" }}>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
