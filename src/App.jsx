import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Layout>
              <>
                <Home />
                <About />
                <Services />
                <Team />
                <Contact />
              </>
            </Layout>
          }
        />

        {/* Individual Routes */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />/services
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Fallback Route */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
