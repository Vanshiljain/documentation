import React from 'react';

const NPMPublish = () => {
  return (
    <div>
      <h3>NPM Publish</h3>
      <pre className="code-block">
        <code>
          {`name: NPM Publish
repoFullName: Vanshiljain-Vanshiljain/python
on:
  push:
    branches:
      - master
jobs:
  run-publish:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: $\{env.workDir}
    strategy:
      matrix:
        node-version:
          - 18.16.0
    steps:
      - uses: actions/checkout@v3
        name: Checkout code
      - uses: actions/setup-node@v3
        name: Set up Node.js
        with:
          node-version: $\{ matrix.node-version }
      - name: Install dependencies
        run: npm install
      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: $\{ secrets.NPM_AUTH_TOKEN }`}
        </code>
      </pre>
      <h2>Explanation:</h2>
      <p>
        <code>name: NPM Publish</code>
        <br />
        This line sets the name of the GitHub Actions workflow. In this case, it's named "NPM Publish".
        <br /><br />
        <code>repoFullName: Vanshiljain-Vanshiljain/python</code>
        <br />
        This line specifies the full name of the repository where the workflow will be applied. It's set to "Vanshiljain-Vanshiljain/python".
        <br /><br />
        <code>on:</code>
        <br />
        <code>  push:</code>
        <br />
        <code>    branches:</code>
        <br />
        <code>      - master</code>
        <br />
        This section defines when the workflow should be triggered. In this case, it triggers the workflow when there is a push event to the "master" branch.
        <br /><br />
        <code>jobs:</code>
        <br />
        <code>  run-publish:</code>
        <br />
        Defines a job named "run-publish". A job is a set of steps that execute on the same runner.
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
        <code>      name: Checkout code</code>
        <br />
        Checks out the repository at the specified version (v3).
        <br /><br />
        <code>    - uses: actions/setup-node@v3</code>
        <br />
        <code>      name: Set up Node.js</code>
        <br />
        Sets up the Node.js environment using the setup-node action (v3). The version of Node.js is determined by the matrix configuration.
        <br /><br />
        <code>    - name: Install dependencies</code>
        <br />
        <code>      run: npm install</code>
        <br />
        Installs project dependencies using npm.
        <br /><br />
        <code>    - name: Publish to npm</code>
        <br />
        <code>      run: npm publish</code>
        <br />
        Publishes the package to the npm registry. The NODE_AUTH_TOKEN environment variable is used for authentication.
        <br /><br />
      </p>
    </div>
  );
}

export default NPMPublish;
