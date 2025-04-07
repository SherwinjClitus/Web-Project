import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import "./styles/global.css"; // Import global styles
import Home from "./components/Home";
import OurPromise from "./components/OurPromise";
import Trusty from "./components/Trusty";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "./components/Banner";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Home />
                  <About />
                  <Banner />
                  <Trusty />
                  <Courses />
                  <OurPromise />
                </>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/promise" element={<OurPromise />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
