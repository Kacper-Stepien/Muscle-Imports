import { FC } from "react";

interface Props {
  id: number;
  title: string;
  description: string;
  alignEnd?: boolean;
}

const ServiceInfo: FC<Props> = ({ id, title, description, alignEnd }) => {
  console.log(`Service Info: ${id} ${title} ${description} ${alignEnd}`);
  return (
    <li
      className={`flex items-center gap-16 md:w-1/2 ${
        alignEnd ? "self-end" : ""
      }`}
    >
      <div className={`flex sm:flex-row flex-col items-center sm:gap-16 gap-4`}>
        <p className="sm:text-[6rem] text-[3rem] font-bold text-primary">
          {id}
        </p>
        <p className="text-lg text-justify">
          <em className="font-bold text-primary">{title}: </em>
          {description}
        </p>
      </div>
    </li>
  );
};

export default ServiceInfo;
