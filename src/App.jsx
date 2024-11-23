import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden relative bg-zinc-600">
      <Navbar />
      <Hero />
      <About/>
    </main>
  );
}

export default App;
