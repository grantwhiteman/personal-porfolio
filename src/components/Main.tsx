import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import SideNav from "./SideNav";

const Main = () => {
  return (
    <div id="main">
      {/* <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      /> */}
      <div
        className="w-full h-screen absolute top-0 left-0 bg-white/50
          bg-slate-100 text-slate-800 shadow-slate-400
           dark:bg-slate-800 dark:text-slate-100"
      >
        <SideNav />
        <DarkModeToggle />
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl">Grant Whiteman</h1>
          <h2 className="sm:text-3xl text-2xl pt-4">
            <TypeAnimation
              sequence={[
                "React", // Types 'One'
                1000, // Waits 1s
                "Typescript", // Deletes 'One' and types 'Two'
                1000, // Waits 1s
                "Front-end developer", // Types 'Three' without deleting 'Two',
                2000, // Waits 2s
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
