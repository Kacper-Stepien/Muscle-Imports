import Chevrolet from "../assets/images/brands/chevrolet-logo.png";
import Dodge from "../assets/images/brands/dodge-logo.png";
import Ford from "../assets/images/brands/ford-logo.png";
import Gmc from "../assets/images/brands/gmc-logo.png";
import H2 from "../utils/H2";

const Brands = () => {
  return (
    <section className="bg-primary xl:px-48 phone:px-16 px-8 py-16 mt-24">
      <H2 text="Brands We Are Specialized In" light />
      {/* <div className="flex sm:flex-row flex-col justify-between items-center gap-8 mt-16">
        <img
          src={Chevrolet}
          alt="chevrolet"
          className="xl:2-60 sm:w-1/6 w-1/2"
        />
        <img src={Dodge} alt="dodge" className="xl:2-60 sm:w-1/6 w-1/2" />
        <img src={Ford} alt="ford" className="xl:2-60 sm:w-1/6 w-1/2" />
        <img src={Gmc} alt="gmc" className="xl:2-60 sm:w-1/6 w-1/2" />
      </div> */}
      <div className="grid grid-cols-2  items-center sm:grid-cols-4 gap-8 mt-16">
        <img src={Ford} alt="ford" className="2xl:w-60" />
        <img src={Chevrolet} alt="chevrolet" className="2xl:w-60" />
        <img src={Dodge} alt="dodge" className="2xl:w-60" />
        <img src={Gmc} alt="gmc" className="2xl:w-60" />
      </div>
    </section>
  );
};

export default Brands;
