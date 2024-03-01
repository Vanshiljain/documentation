// Introduction.js
import React from 'react';
import '../content.css';
const Overview = () => {
  return (
    <div>
    <h2>What is CI/CD?</h2>
    <p className="introduction-paragraph">
      Continuous integration (CI) is a practice that integrates code into a chosen branch of a shared repository, early and often. Instead of building out features in isolation and integrating them at the end of a development cycle, code is integrated with the shared repository by developers multiple times throughout the day by committing daily to a shared mainline. Every commit triggers automated tests and builds. If these fail, they can be repaired quickly.
    </p>
    <p className="introduction-paragraph">
      Continuous delivery (CD) is a practice that produces reliable releases to a chosen development environment, like a staging or production branch.
    </p>
    <p className="introduction-paragraph">
      The CI/CD process allows developers to release higher quality, more stable products.
    </p>
  </div>
  );
}

export default Overview;
