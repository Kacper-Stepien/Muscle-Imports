import { BiSolidTimeFive } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import H2 from "../utils/H2";
import H3 from "../utils/H3";
import { MdEmail } from "react-icons/md";
import statueOfLiberty from "../assets/images/liberty-statue.png";

const Contact = () => {
  return (
    <section
      className="xl:px-48 phone:px-16 px-8 py-16 pb-24 phone:mt-24 mt-8 relative"
      id="contact"
    >
      <H2 text="Skontaktuj się z nami" />
      <p className="text-lg text-justify mb-12 lg:w-1/2">
        Jesteś gotowy zrobić kolejny krok w kierunku zdobycia swojego
        wymarzonego samochodu? Nie czekaj – zadzwoń do nas już dziś!
      </p>
      <H3 text="Dlaczego warto do nas zadzwonić?" />
      <p className="text-lg text-justify mb-12 lg:w-1/2">
        Jeśli chodzi o uzyskanie wszelkich szczegółów i odpowiedzi, nic nie
        zastąpi bezpośredniej rozmowy. Nasz zespół jest gotów dostarczyć Ci
        spersonalizowanej pomocy, omówić Twoje preferencje i poprowadzić Cię
        przez proces znalezienia oraz importu samochodu. Uniknij oczekiwania na
        e-maile i otrzymaj natychmiastową, klarowną odpowiedź, dzwoniąc do nas.
      </p>
      <H3 text="Dane Kontaktowe" />
      <div className="mb-6 flex gap-4 items-top">
        <FaPhone className="inline-block mr-4 text-2xl" />
        <p className="inline-block text-lg">782-748-757</p>
      </div>
      <div className="flex items-top gap-4 mb-6">
        <BiSolidTimeFive className="inline-block mr-4 text-2xl" />
        <div className="flex gap-4">
          <div>
            <p>pon. - pt. </p>
            <p>sob.</p>
          </div>
          <div>
            <p>8:00 - 19:00</p>
            <p>8:00 - 14:00</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-top">
        <MdEmail className="inline-block mr-4 text-2xl" />
        <p className="inline-block text-lg">muscle@imports.com</p>
      </div>
      <img
        src={statueOfLiberty}
        alt="statue of liberty"
        className="xl:w-[42rem] w-[30rem] lg:block hidden absolute  right-0 bottom-0"
      />
    </section>
  );
};

export default Contact;
