import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
function App() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <About/>
      <Features/>
    </main>
  );
}

export default App;
