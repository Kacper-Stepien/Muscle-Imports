import { FC } from "react";

interface Props {
  text: string;
  light?: boolean;
}

const H3: FC<Props> = ({ text, light }) => {
  return (
    <h3
      className={`sm:text-3xl text-2xl font-bold mb-6 ${
        light ? "text-white" : "text-gray-900"
      }`}
    >
      {text}
    </h3>
  );
};

export default H3;
