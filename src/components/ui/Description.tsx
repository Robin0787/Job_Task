import { ReactNode } from "react";

const Description = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return <p className={`desc ${classNames}`}>{children}</p>;
};

export default Description;
