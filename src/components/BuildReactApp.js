// BuildReactApp.js
import React from 'react';

const BuildReactApp = () => {
  return (
    <div>
      <h3>Build React Application</h3>
      <pre>
        <code>
          {`name: Build React Application
repoFullName: Default Repository
on
  push:
    branches:
      - Default Branch
jobs:
  run-deploy:
    runs-on: ubuntu-lates
    defaults:
      run:
        working-directory: 
    strategy:
      matrix:
        node-version:
          - 18.16.0
    steps:
      - uses: actions/checkout@v3
        name: Setup jobs
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        name: Setup environment
        with:
          node-version: 
      - name: Install dependencies
        run: npm install --global yarn && yarn
      - name: Building
        run: yarn run build`}
        </code>
        <br/>
        <h2>Explanation:</h2>
        <p>
      <code>name: Build React Application</code>
      <br />
      This line sets the name of the GitHub Actions workflow. In this case, it's named "Build React Application".
      <br /><br />

      <code>repoFullName: Vanshiljain-Vanshiljain/nestjs-graphql</code>
      <br />
      This line specifies the full name of the repository where the workflow will be applied. It's set to "Vanshiljain-Vanshiljain/nestjs-graphql".
      <br /><br />

      <code>on:</code>
      <br />
      <code>  push:</code>
      <br />
      <code>    branches:</code>
      <br />
      <code>      - Vanshiljain-link</code>
      <br />
      This section defines when the workflow should be triggered. In this case, it triggers the workflow when there is a push event to the "Vanshiljain-link" branch.
      <br /><br />

      <code>jobs:</code>
      <br />
      <code>  run-deploy:</code>
      <br />
      Defines a job named "run-deploy". A job is a set of steps that execute on the same runner.
      <br /><br />

      <code>  runs-on: ubuntu-latest</code>
      <br />
      Specifies that the job will run on a virtual machine with the latest version of Ubuntu.
      <br /><br />

      <code>  defaults:</code>
      <br />
      <code>    run:</code>
      <br />
      <code>      working-directory:</code>
      <br />
      Defines defaults for the run section of steps. In this case, no specific working directory is specified.
      <br /><br />

      <code>  strategy:</code>
      <br />
      <code>    matrix:</code>
      <br />
      <code>      node-version:</code>
      <br />
      <code>        - 18.16.0</code>
      <br />
      Defines a strategy for the job, creating a matrix of configurations. In this case, it specifies a matrix with a single configuration for the node version, set to "18.16.0".
      <br /><br />

      <code>  steps:</code>
      <br />
      <code>    - uses: actions/checkout@v3</code>
      <br />
      <code>      name: Setup jobs</code>
      <br />
      <code>      with:</code>
      <br />
      <code>        fetch-depth: 0</code>
      <br />
      Checks out the repository at the specified version (v3), and sets up the job with a fetch depth of 0, meaning the entire commit history will be fetched.
      <br /><br />

      <code>    - uses: actions/setup-node@v3</code>
      <br />
      <code>      name: Setup environment</code>
      <br />
      <code>      with:</code>
      <br />
      <code>        node-version:</code>
      <br />
      Sets up the Node.js environment using the setup-node action (v3). The version of Node.js is not specified, so it will use the default version.
      <br /><br />

      <code>    - name: Install dependencies</code>
      <br />
      <code>      run: npm install --global yarn && yarn</code>
      <br />
      Installs dependencies using npm, installs yarn globally, and then installs project dependencies using yarn.
      <br /><br />

      <code>    - name: Building</code>
      <br />
      <code>      run: yarn run build</code>
      <br />
      Runs the build script defined in the project's package.json file using yarn.
      <br /><br />

      This GitHub Actions workflow file automates the process of building a React application, triggering on pushes to the "Vanshiljain-link" branch, installing dependencies, and then running the build script to generate the production-ready build of the application.
    </p>
      </pre>
    </div>
  );
}

export default BuildReactApp;
