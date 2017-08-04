import React from 'react';

const RepoList = (props) => {
  var repos = props.repos.map((repo, index) =>
    <li key={index}><a href={repo.url}>{repo.name}</a></li>
  );
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      {repos}
    </div>
  )
}

export default RepoList;
