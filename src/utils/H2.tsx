import { FC } from "react";

interface Props {
  text: string;
  light?: boolean;
}

const H2: FC<Props> = ({ text, light }) => {
  return (
    <h2
      className={`sm:text-4xl text-3xl font-bold mb-6 ${
        light ? "text-white" : "text-gray-900"
      }`}
    >
      {text}
    </h2>
  );
};

export default H2;
