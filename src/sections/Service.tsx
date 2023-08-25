import H2 from "../utils/H2";
import ServiceInfo from "../components/ServiceInfo";
import services from "../data/services";

const Service = () => {
  return (
    <div className="xl:px-48 phone:px-16 px-8 py-16 mt-16" id="service">
      <H2 text="Our Service" />
      <p className="text-lg text-justify">
        At Muscle Import, we're dedicated to turning your automotive dreams into
        reality. Our comprehensive range of services ensures that your
        car-import journey is smooth, enjoyable, and tailored to your
        preferences. Here's what you can expect when you choose us:
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
    </div>
  );
};

export default Service;
