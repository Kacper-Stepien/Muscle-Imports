import Brands from "./sections/Brands";
import CarsImported from "./sections/CarsImported";
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
    </div>
  );
}

export default App;
