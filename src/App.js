import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;