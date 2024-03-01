import React from 'react';

const NodeJSbackend = () => {
  return (
    <div>
      <h3>Node.js Backend</h3>
      <pre className="code-block">
        <code>
          {`name: Node.js Backend
repoFullName: Default Repository
on:
  push:
    branches:
      - Default Branch
jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: $\{env.workDir}
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test`}
        </code>
      </pre>
      <h2>Explanation:</h2>
      <p>
        <code>name: Node.js Backend</code>
        <br />
        This line sets the name of the GitHub Actions workflow. In this case, it's named "Node.js Backend".
        <br /><br />
        <code>repoFullName: Default Repository</code>
        <br />
        This line specifies the full name of the repository where the workflow will be applied. It's set to "Default Repository".
        <br /><br />
        <code>on:</code>
        <br />
        <code>  push:</code>
        <br />
        <code>    branches:</code>
        <br />
        <code>      - Default Branch</code>
        <br />
        This section defines when the workflow should be triggered. In this case, it triggers the workflow when there is a push event to the "Default Branch".
        <br /><br />
        <code>jobs:</code>
        <br />
        <code>  build:</code>
        <br />
        Defines a job named "build". A job is a set of steps that execute on the same runner.
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
        <code>  steps:</code>
        <br />
        <code>    - name: Checkout code</code>
        <br />
        <code>      uses: actions/checkout@v3</code>
        <br />
        Checks out the repository at the specified version (v3), fetching the entire commit history.
        <br /><br />
        <code>    - name: Set up Node.js</code>
        <br />
        <code>      uses: actions/setup-node@v3</code>
        <br />
        Sets up the Node.js environment using the setup-node action (v3), specifying the Node.js version as '14'.
        <br /><br />
        <code>    - name: Install dependencies</code>
        <br />
        <code>      run: npm install</code>
        <br />
        Installs project dependencies using npm.
        <br /><br />
        <code>    - name: Run tests</code>
        <br />
        <code>      run: npm test</code>
        <br />
        Runs the tests for the Node.js backend application.
        <br /><br />
      </p>
    </div>
  );
}

export default NodeJSbackend;
