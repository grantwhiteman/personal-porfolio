import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineLaptop,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import IconLinkButton from "./IconLinkButton";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <button
        className={`iconButton absolute z-[99] md:hidden ${
          nav && "rotate-90"
        } `}
      >
        <AiOutlineMenu
          size={20}
          // className="absolute top-8 left-8 z-[99] md:hidden"
          onClick={handleNav}
        />
      </button>
      {nav && (
        <div className="fixed w-full h-screen bg-slate-100/90 dark:bg-slate-800/90 flex flex-col justify-center items-center z-20">
          <IconLinkButton
            href="#main"
            icon={<AiOutlineHome size={20} />}
            text="Home"
          />
          <IconLinkButton
            href="#work"
            icon={<AiOutlineLaptop size={20} />}
            text="Work"
          />
          <IconLinkButton
            href="#projects"
            icon={<AiOutlineProject size={20} />}
            text="Projects"
          />
          <IconLinkButton
            href="#contact"
            icon={<AiOutlineMail size={20} />}
            text="Contact"
          />
          <IconLinkButton
            href="#about"
            icon={<BsPerson size={20} />}
            text="About"
          />
        </div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <IconLinkButton href="#main" icon={<AiOutlineHome size={20} />} />
          <IconLinkButton href="#work" icon={<AiOutlineLaptop size={20} />} />
          <IconLinkButton
            href="#projects"
            icon={<AiOutlineProject size={20} />}
          />
          <IconLinkButton href="#resume" icon={<BsPerson size={20} />} />
          <IconLinkButton href="#contact" icon={<AiOutlineMail size={20} />} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
