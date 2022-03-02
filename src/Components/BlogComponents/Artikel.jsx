import react, { Fragment, useEffect, useState } from "react";
import "aos/dist/aos.css";
import useContentful from "../../useContentful";
import { Link } from "react-router-dom";

const Artikel = () => {
  const [detailBlog, setDetailBlog] = useState([]);

  const { getBlog } = useContentful();

  useEffect(() => {
    getBlog().then((result) => {
      const dataku = result[0];
      console.log(dataku);
      setDetailBlog(dataku);
    });
  }, []);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <Link to="/Artikel">
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
      </Link>
    );
  };

  return (
    <Fragment>
      <div data-aos="zoom-up" data-aos-duration="500">
        <div className="container max-w-3xl px-10 py-6 mx-auto rounded-lg shadow-sm transition-all duration-700 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">tanggal</span>
          </div>
          <div className="mt-3">
            <Link
              to=""
              rel="noopener noreferrer"
              href="#"
              className="text-xl font-semibold  text-gray-600"
            >
              {detailBlog.title}
            </Link>

            <p className="mt-2 text-gray-400 font-light">
              <ReadMore>konten</ReadMore>
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-400 text-sm">nama</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Artikel;
