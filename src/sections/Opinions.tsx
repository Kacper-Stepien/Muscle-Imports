import CustomerOpinion from "../components/CustomerOpinion";
import H2 from "../utils/H2";
import opinions from "../data/opinions";

const Opinions = () => {
  return (
    <section
      className="xl:px-48 phone:px-16 px-8 py-32 phone:mt-24 mt-8 bg-primary"
      id="opinions"
    >
      <H2 text="Co mówią nasi klienci?" light />
      <p className="text-lg text-justify text-white">
        Posłuchaj opini naszych klientów, którzy nam zaufali.
      </p>
      <ul className="grid lg:grid-cols-3 gap-16 mt-16">
        {opinions.map((opinion) => (
          <CustomerOpinion
            key={opinion.id}
            name={opinion.name}
            opinion={opinion.opinion}
            star={opinion.star}
            image={opinion.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Opinions;
