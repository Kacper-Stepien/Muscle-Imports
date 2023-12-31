import CardCard from "../components/CarCard";
import H2 from "../utils/H2";
import cars from "../data/cars";

const CarsImported = () => {
  return (
    <section className="xl:px-48 phone:px-16 px-8 py-16 phone:mt-24 mt-8">
      <H2 text="Samochody, które sprowadziliśmy" />
      <p className="text-lg text-justify">
        Podana cena to ostateczna kwota zapłacona przez klienta, obejmująca
        podatek, transport, itp.
      </p>
      <ul className="grid md:grid-cols-2 gap-16 mt-16">
        {cars.map((car) => (
          <CardCard
            key={car.id}
            name={car.name}
            year={car.year}
            price={car.price}
            image={car.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default CarsImported;
