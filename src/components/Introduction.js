// Introduction.js
import React from 'react';
import './content.css';
const Introduction = () => {
  return (
    <div>
        <p className="introduction-paragraph">
        `Welcome to the Onetab CLI documentation! Onetab CLI is a robust Node.js command-line interface (CLI) tool crafted to simplify the initiation and management of applications within a predefined pipeline configuration. This tool seamlessly integrates with GitHub Actions workflows locally and Docker, offering a streamlined approach to your development processes.</p>
        <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Simplified Initialization:</strong> Initialize the Onetab CLI npm package for your project effortlessly, setting up the required configuration files with a single command.
        </li>
        <li>
          <strong>Lifecycle Management:</strong> Manage the lifecycle of configured applications seamlessly. Start or stop applications with ease, enhancing control over your development environment.
        </li>
        <li>
          <strong>Application Configuration:</strong> View a comprehensive table of configured applications, providing vital information such as IDs, names, statuses, paths, and UUIDs, aiding in efficient management.
        </li>
        <li>
          <strong>CI/CD Service Termination:</strong> Terminate the CI/CD service either completely or for specific projects, ensuring flexibility and control over your development environment.
        </li>
        <li>
          <strong>Version Control:</strong> Easily check the version number of the Onetab CLI tool to stay updated with the latest features and improvements.
        </li>
        <li>
          <strong>Helpful Commands:</strong> Access a list of available commands and their usage, ensuring clarity and ease of use for users of all levels.
        </li>
        <li>
          <strong>Docker Integration:</strong> Seamlessly execute Docker commands as part of your workflow, enhancing compatibility and versatility in your development environment.
        </li>
        </ul>
    </div>
  );
}

export default Introduction;
