import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Portfolio from "../Portfolio/Portfolio";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
      <Header />
      <Main />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
