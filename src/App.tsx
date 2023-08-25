import Brands from "./sections/Brands";
import CarsImported from "./sections/CarsImported";
import Header from "./sections/Heading";
import Service from "./sections/Service";

function App() {
  return (
    <div className="font-lato">
      <Header />
      <Service />
      <Brands />
      <CarsImported />
    </div>
  );
}

export default App;
