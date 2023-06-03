import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="flex-wrapper">
        <Header></Header>
        <Routes></Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
