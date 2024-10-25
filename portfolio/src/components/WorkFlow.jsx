import { CheckCircle2 } from "lucide-react";
import codeimg from "../assets/code.jpg";
import { checklistItems } from "../constants";
function Workflow() {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Accelerate Your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Coding WorkFlow
          </span>
        </h2>
        <div className="flex flex-wrap justify-center m-6 p-6">
          <div className="p-2 w-full lg:w-1/2">
            <img src={codeimg} alt="Code" />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 p-2 text-xl">{item.title}</h5>
                  <p className="text-md-neutral-500 p-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Workflow;
