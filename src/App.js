import "./App.css";
import Contact from "./component/Contact";
import Design from "./component/Design";
import Enquiry from "./component/Enquiry";
import Footer from "./component/Footer";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Design />
      <Enquiry />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
