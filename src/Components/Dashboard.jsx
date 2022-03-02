import react, { Fragment } from "react";
import mubin from "../img/mubin.png";
import html from "../img/html5.png";
import css from "../img/css3.png";
import js from "../img/js.png";
import reactImg from "../img/react.png";
import tailwindImg from "../img/tailwind.png";
import bootstrapImg from "../img/bootstrap.png";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Dashboard = () => {
  useEffect(() => {
    Aos.init({
      duration: 0,
    });
  }, []);

  return (
    <Fragment>
      <div
        className="max-w-sm bg-white rounded overflow-hidden shadow-lg text-center mx-auto lg:pt-10 mt-10 md:scale-100"
        data-aos="zoom-up"
        data-aos-duration="500"
      >
        <img src={mubin} className="w-24 mx-auto mt-5" alt="mubin" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mubin_Mhd</div>
          <p className="text-gray-700 text-base">
            Frontend specialist, Over the past 3 years, I have learned to build
            great user interfaces.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Landing Page
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Company
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Blog
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Ecommerce
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Personal Brand
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Online Course
          </span>
        </div>
      </div>

      <section className=" dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8 ">
          <div className="flex flex-wrap justify-between ">
            <div className="w-10 h-auto">
              <img className="opacity-50" src={html} alt="" />
            </div>
            <div className="w-10 h-auto">
              <img className="opacity-50" src={css} alt="" />
            </div>
            <div className="w-10 h-auto">
              <img className="opacity-50" src={js} alt="" />
            </div>
            <div className="w-10 h-auto">
              <img className="opacity-50" src={reactImg} alt="" />
            </div>
            <div className="w-10 h-auto">
              <img className="opacity-50" src={tailwindImg} alt="" />
            </div>
            <div className="w-10 h-auto">
              <img className="opacity-50" src={bootstrapImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Dashboard;
