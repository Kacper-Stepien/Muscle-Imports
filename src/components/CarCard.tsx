import { FC } from "react";

interface Props {
  name: string;
  year: number;
  price: number;
  image: string;
}

function formatPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const CardCard: FC<Props> = ({ name, year, price, image }) => {
  return (
    <li className="flex flex-col items-center  shadow-2xl">
      <img src={image} alt={name} className="" />
      <div className="flex phone:flex-row flex-col  justify-between items-center gap-4 w-full p-4">
        <div className="flex flex-col gap-2 phone:items-start items-center">
          <p className="text-lg font-bold">{name}</p>
          <p>{year}</p>
        </div>
        <p className="text-primary text-xl  font-bold whitespace-nowrap">
          {formatPrice(price)} $
        </p>
      </div>
    </li>
  );
};

export default CardCard;
