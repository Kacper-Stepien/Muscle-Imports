import Brands from "./sections/Brands";
import CarsImported from "./sections/CarsImported";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Heading";
import Opinions from "./sections/Opinions";
import Service from "./sections/Service";

function App() {
  return (
    <div className="font-lato">
      <Header />
      <Service />
      <Brands />
      <CarsImported />
      <Opinions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
