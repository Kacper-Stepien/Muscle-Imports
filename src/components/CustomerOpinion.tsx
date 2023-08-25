import { AiFillStar } from "react-icons/ai";
import { FC } from "react";

interface Props {
  name: string;
  opinion: string;
  star: number;
  image: string;
}

const CustomerOpinion: FC<Props> = ({ name, opinion, star, image }) => {
  return (
    <li className="flex flex-col items-center justify-between gap-4 p-4 shadow-2xl text-white ">
      <img src={image} alt={name} className="w-24 rounded-full" />

      <p className="text-center">{opinion}</p>
      <p>
        <AiFillStar className="inline mr-2 text-3xl" />
        {star}
      </p>
      <p className="text-lg font-bold">{name}</p>
    </li>
  );
};

export default CustomerOpinion;
