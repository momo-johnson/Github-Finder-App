import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function NotFound(props) {
  return (
    <>
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="text-8xl font-bold mb-8">Oops!</h1>
            <p className="text-5xl mb-8">404 - Page not found!</p>
            <p>
              <Link className="btn btn-primary btn-lg mt-4" to="/">
                <FaHome className="mr-2 " /> Back to Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

NotFound.propTypes = {};

export default NotFound;
