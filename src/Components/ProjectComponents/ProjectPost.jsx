import React, { Fragment } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectPost = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 0,
    });
  });

  return (
    <div
      className="flex flex-wrap justify-center"
      data-aos="zoom-up"
      data-aos-duration="500"
    >
      <div class="rounded-sm shadow-lg my-10 mx-5 max-w-sm">
        <div class="h-64 bg-cover hover:bg-gray gambarProject"></div>
        <div class="mx-6 my-4 border-b border-gray-light">
          <div class="font-medium text-base text-gray-darker mb-4">
            {props.title}
          </div>
          <p class="font-normal text-gray-dark text-sm mb-2">{props.desc}</p>
        </div>
        <div class="mx-6 my-4 flex flex-wrap">
          <div class="flex-wrap">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {props.tech1}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {props.tech2}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {props.tech3}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {props.tech4}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;
