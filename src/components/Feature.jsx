import { ReceiptRussianRuble } from "lucide-react";
import { features } from "../constants";

function Feature() {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span
            className="bg-neutral-900 text-orange-400 rounded-full 
    h-6 text-sm font-medium px-2 py-1 uppercase"
          >
            Feature
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easily Build{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
              Your Code
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 ">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex p-2 m-2">
                <div
                  className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center 
                items-center rounded-full"
                >
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 text-xl ">{feature.text}</h5>
                  <p className="text-md text-neutral-400 p-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Feature;
