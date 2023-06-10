import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Take from "./components/Take";
import Privacy from "./components/Privacy";
import Allow from "./components/Allow";
import Stay from "./components/Stay";
import What from "./components/What";
import Learn from "./components/Learn";
import Instant from "./components/Instant";
import Best from "./components/Best";
import Footer from "./components/Footer";
import Global from "./components/Global";
import Some from "./components/Some";
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <div className="App overflow-hidden">
      <Hero />
      <Take />
      <Privacy />
      <Instant />
      <Allow />
      <What />
      <Learn />
      <Best />
      <Stay />
      <Some />
      <Global />
      <Footer />
      <Loading />
      <BackToTop />
    </div>
  );
}

export default App;
