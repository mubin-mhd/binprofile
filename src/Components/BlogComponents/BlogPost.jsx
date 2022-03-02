import react, { Fragment, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const BlogPost = () => {
  const [artikel, setArtikel] = useState([]);
  useEffect(() => {
    Aos.init({
      duration: 0,
    });

    axios.get("http://localhost:1337/api/blogs").then((res) => {
      const dataBlog = res.data.data;
      console.log(dataBlog);
      setArtikel(dataBlog);
    });
  }, []);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? (
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline text-gray-600 block mt-2"
            >
              Read more...
            </a>
          ) : (
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline text-gray-500 block mt-2"
            >
              Read less...
            </a>
          )}
        </span>
      </p>
    );
  };

  return (
    <Fragment>
      <div data-aos="zoom-up" data-aos-duration="500">
        {artikel.map((result) => (
          <div
            key={result.id}
            className="container max-w-3xl px-10 py-6 mx-auto rounded-lg shadow-sm transition-all duration-700 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {result.attributes.tanggal}
              </span>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xl font-semibold hover:underline text-gray-600"
              >
                {result.attributes.judul}
              </a>
              <p className="mt-2 text-gray-400 font-light">
                <ReadMore>{result.attributes.kontenBlog}</ReadMore>
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-400 text-sm">Leroy Jenkins</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BlogPost;
