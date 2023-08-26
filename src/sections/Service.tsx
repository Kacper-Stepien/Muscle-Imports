import H2 from "../utils/H2";
import ServiceInfo from "../components/ServiceInfo";
import services from "../data/services";

const Service = () => {
  return (
    <section
      className="xl:px-48 phone:px-16 px-8 py-16 phone:mt-24 mt-8"
      id="service"
    >
      <H2 text="Nasza usługa" />
      <p className="text-lg text-justify">
        W Muscle Imports poświęcamy się przekształcaniu Twoich motoryzacyjnych
        marzeń w rzeczywistość. Posiadamy wieloletnie doświadczenie w branży
        wyszukiwaniu i bezpiecznym transporcie wartościowych samochodów z USA.
        Oto czego możesz się spodziewać, korzystając z naszej usługi:
      </p>
      <ul className="mt-16 mb-8  flex flex-col xl:gap-16 gap-10 items-start">
        {services.map((service) => (
          <ServiceInfo
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            alignEnd={service.id % 2 === 0}
          />
        ))}
      </ul>
    </section>
  );
};

export default Service;
