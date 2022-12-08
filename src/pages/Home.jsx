import PropTypes from "prop-types";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home(props) {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

Home.propTypes = {};

export default Home;
