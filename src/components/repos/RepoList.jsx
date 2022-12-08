import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
function RepoList({ repos }) {
  return (
    <div className="rounded-lg shawdow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Respositories
        </h2>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
