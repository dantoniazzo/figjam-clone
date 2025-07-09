import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link className="cursor-pointer" to={"/"}>
      <img src={"/conducto.svg"} width={30} height={30} />
    </Link>
  );
};
