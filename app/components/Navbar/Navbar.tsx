"use client";

import Container from "../container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white shadow-sm z-10">
      <div className="py-4 border-b[1px]">
        <Container>
          {" "}
          <div className="flex flex-row justify-between gap-3 items-center md:gap-0"></div>{" "}
          <Logo />
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
