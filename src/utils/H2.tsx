import { FC } from "react";

interface Props {
  text: string;
}

const H2: FC<Props> = ({ text }) => {
  return <h2 className="text-3xl font-bold mb-8 text-gray-900">{text}</h2>;
};

export default H2;
