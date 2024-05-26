import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return <h1 className="heading">{children}</h1>;
};

export default Heading;
