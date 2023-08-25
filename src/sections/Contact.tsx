import { BiSolidTimeFive } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import H2 from "../utils/H2";
import H3 from "../utils/H3";
import statueOfLiberty from "../assets/images/liberty-statue.png";

const Contact = () => {
  return (
    <section
      className="xl:px-48 phone:px-16 px-8 py-16 pb-24 phone:mt-24 mt-8 relative"
      id="contact"
    >
      <H2 text="Contact Us" />
      <p className="text-lg text-justify mb-12 lg:w-1/2">
        Ready to take the next step towards your dream car? Don't wait – give us
        a call today!
      </p>
      <H3 text="Why Call Us?" />
      <p className="text-lg text-justify mb-12 lg:w-1/2">
        When it comes to getting all the details and answers you need, nothing
        beats a direct conversation. Our team is ready to provide you with
        personalized assistance, discuss your preferences, and guide you through
        the car import process. Avoid waiting for emails and get immediate
        clarity by picking up the phone.
      </p>
      <H3 text="Contact Details" />
      <div className="mb-6 flex gap-4 items-top">
        <FaPhone className="inline-block mr-4 text-2xl" />
        <p className="inline-block text-lg">782-748-757</p>
      </div>
      <div className="flex items-top gap-4">
        <BiSolidTimeFive className="inline-block mr-4 text-2xl" />
        <div className="flex gap-4">
          <div>
            <p>Monday - Friday</p>
            <p>Saturday</p>
          </div>
          <div>
            <p>8:00 - 19:00</p>
            <p>8:00 - 14:00</p>
          </div>
        </div>
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
